package com.erichgamma.api.user;

import java.util.List;

import com.erichgamma.api.article.Article;
// import com.erichgamma.api.order.Order;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Entity(name = "users")
@ToString(exclude = "id")
public class User {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "writer")
    private List<Article> articlesId;

    // @OneToMany(mappedBy = "user")
    // private List<Order> ordersId;

    private Long addressId;
    private String username;
    private String password;
    private String name;
    private String phone;
    private String job;
    private Double height;
    private Double weight;

}

