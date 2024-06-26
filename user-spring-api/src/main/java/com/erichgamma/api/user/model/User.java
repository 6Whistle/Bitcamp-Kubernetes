package com.erichgamma.api.user.model;

import java.util.List;

import com.erichgamma.api.article.model.Article;
import com.erichgamma.api.common.model.BaseEntity;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Entity(name = "users")
@ToString(exclude = "id")
public class User extends BaseEntity {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "writer", fetch = FetchType.LAZY)
    private List<Article> articlesId;

    // @OneToMany(mappedBy = "user")
    // private List<Order> ordersId;

    private Long addressId;
    private String username;

    @Setter
    private String password;
    @Setter
    private String name;
    @Setter
    private String phone;
    @Setter
    private String job;
}

