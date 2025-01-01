package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.MyOrder;

@Repository
public interface MyOrderRepository extends JpaRepository<MyOrder,Integer>{

	public MyOrder findByOrderId(String orderId);
}
