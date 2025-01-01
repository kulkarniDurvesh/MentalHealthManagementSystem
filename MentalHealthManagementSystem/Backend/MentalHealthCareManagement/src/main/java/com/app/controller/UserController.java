package com.app.controller;

import java.io.IOException;
import java.security.Principal;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.MyOrderRepository;
import com.app.dto.AppointmentRequest;
import com.app.dto.ChangePassword;
import com.app.dto.UserProfile;
import com.app.pojos.MyOrder;
import com.app.pojos.User;
import com.app.service.EmailSenderService;
import com.app.service.IAppointmentService;
import com.app.service.IDoctorService;
import com.app.service.IImageService;
import com.app.service.IUserService;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

	@Autowired
	private IDoctorService doctorService;

	@Autowired
	private IImageService imageService;

	@Value("${image.upload.location}")
	private String imageLocation;

	@Autowired
	private MyOrderRepository myOrderRepository;

	@Autowired
	private IAppointmentService appointmentService;

	@Autowired
	private EmailSenderService senderService;

	@Autowired
	private IUserService userService;
	
	@GetMapping("/all/doctors")
	public ResponseEntity<?> fetchVerifiedDoctors() {
		return ResponseEntity.ok(doctorService.getAllVerifiedDoctors());
	}

	@GetMapping("/doctors/image")
	public ResponseEntity<?> fetchAllDoctorsAndImage() throws IOException {
		// List<DoctorImage> allImages = imageService.getAllImages();
		List<byte[]> allImages = imageService.getAllImages();
		// System.out.println(allImages);
		return ResponseEntity.ok(allImages);
	}

	@GetMapping("/doctorsimage/{userName}")
	public ResponseEntity<byte[]> fetchImageByUserName(@PathVariable String userName) throws Exception {
		byte[] image = imageService.getImageByUserName(userName);

		return ResponseEntity.ok(image);

	}

	@PostMapping("/create_order")
	public String createOrder(@RequestParam String amount, Principal principal) throws Exception {

		System.out.println(amount);
		int amt = Integer.parseInt(amount);
										// razorpay client key       razorpay client ID
		var client = new RazorpayClient("rzp_test_XXpyFKv0mhkN1r", "L8uFu75qG5JobuCGrQUu6bHg");

		double random = Math.random()*1000;
		JSONObject ob = new JSONObject();
		ob.put("amount", amt);
		ob.put("currency", "INR");
		ob.put("receipt", "txn_23"+random);

		// creating new Order

		Order order = client.Orders.create(ob);

		System.out.println(order);

		// save order in database

		MyOrder myOrder = new MyOrder();

		myOrder.setAmount(order.get("amount") + "");
		System.out.println("amount generated");
		myOrder.setOrderId(order.get("id"));
		System.out.println("id generated");
		myOrder.setPaymentId(null);
		myOrder.setStatus("created");
		System.out.println("status generated");
		// myOrder.setPaymentId(order.get("payment_id"));
		// myOrder.setUser(this.userRepository.getById(principal.getName()));
		System.out.println("user generated");
		myOrder.setReceipt(order.get("receipt"));
		System.out.println("receipt generated");

		this.myOrderRepository.save(myOrder);

		System.out.println("Order Function executed");

		return order.toString();
	}

	@PostMapping("/update_order")
	public ResponseEntity<?> updateOrder(@RequestParam String payment_id, @RequestParam String order_id,
			@RequestParam String status) {
		System.out.println("in update part of form");
		System.out.println(payment_id);
		System.out.println(order_id);
		System.out.println(status);
		MyOrder myOrder = this.myOrderRepository.findByOrderId(order_id);
		myOrder.setPaymentId(payment_id);
		myOrder.setStatus(status);
		this.myOrderRepository.save(myOrder);
		System.out.println(payment_id);

		return ResponseEntity.ok("Updated Successfully");
	}

	@PostMapping("/book_appointment")
	private ResponseEntity<?> bookAppointment(@RequestBody AppointmentRequest request) {

		System.out.println(request);
		String bookAppointment = appointmentService.bookAppointment(request);
		sendEmail(request.getEmail(), request.getPatientName(), request.getAppointMentDate());
		return ResponseEntity.ok(bookAppointment);
	}

	
	public void sendEmail(String email, String patientName, LocalDate date) {

		String link = "\"https://us02web.zoom.us/j/81937684923?pwd=UVcwSWlBb3EreXFHVDVGZGMvU3ZTQT09\"";

		String message = "Dear " + patientName
				+ " \r\n , your appointment is booked successfully please find the link below to join \r\n" + link+"\r\n Appointment Date - "+date+"\r\n Thank you";
		senderService.sendEmail(email, "Appointment Booked", message);
	}
	
	@PostMapping("/update/profile")
	public ResponseEntity<?> updateUserProfile(@RequestBody UserProfile request){
		
		System.out.println(request);
		return ResponseEntity.ok(userService.updateUserProfile(request));
	}
	
	@GetMapping("/details/{userName}")
	public ResponseEntity<?> fetchUserDetail(@PathVariable String userName){
		
		User user = userService.findUserByUsername(userName);
		System.out.println(user);
		
		UserProfile profile = new UserProfile();
		
		String[] arr = user.getFullName().split(" ",2);
		System.out.println(Arrays.toString(arr));
		
		profile.setFirstName(arr[0]);
		profile.setLastName(arr[1]);
		profile.setEmail(user.getEmail());
		profile.setMobileNo(user.getMobileNo());
		
		return ResponseEntity.ok(profile);
	}
	
	@PostMapping("/change/password")
	public ResponseEntity<?> changePassword(@RequestBody ChangePassword request){
		
		System.out.println(request);
		String response = userService.changePassword(request);
		
		return ResponseEntity.ok(response);
	}
}
