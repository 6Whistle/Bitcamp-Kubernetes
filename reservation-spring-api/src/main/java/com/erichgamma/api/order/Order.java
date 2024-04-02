package com.erichgamma.api.order;

import java.util.List;

import com.erichgamma.api.product.Product;
// import com.erichgamma.api.user.User;

import jakarta.persistence.*;
import lombok.*;

@Entity(name = "orders")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@ToString
public class Order {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    // @ManyToOne
    // @JoinColumn(name = "user_id")
    // private User user;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = true)
    private Product product;
}
