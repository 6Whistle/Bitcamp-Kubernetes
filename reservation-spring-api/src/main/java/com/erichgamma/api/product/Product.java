package com.erichgamma.api.product;

import java.util.List;

import com.erichgamma.api.order.Order;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Getter
@Entity(name = "products")
@ToString(exclude = "id")
public class Product {
    @Id
    @Column(name = "id",nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String name;
    private String company;
    private Integer price;

    @OneToMany(mappedBy = "product")
    private List<Order> ordersId;
}
