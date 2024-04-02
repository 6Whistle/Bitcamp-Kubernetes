package com.erichgamma.api.board;

import com.erichgamma.api.article.Article;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Getter
@ToString(exclude = "id")
@Entity(name = "boards")
public class Board {

    @Id
    @Column(name = "id",nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String boardName;
    private String boardType;

    @OneToMany(mappedBy = "board")
    private List<Article> articlesId;    
}
