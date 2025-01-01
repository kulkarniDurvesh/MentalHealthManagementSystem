package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "orders")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class MyOrder {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer myOrderId;


    private String orderId;

    private String amount;

    private String receipt;

    @Column(length = 10)
    private String status;


    private String paymentId;
}
