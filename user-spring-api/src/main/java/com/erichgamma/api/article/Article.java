package com.erichgamma.api.article;

import com.erichgamma.api.board.Board;
import com.erichgamma.api.common.BaseEntity;
import com.erichgamma.api.user.User;

import jakarta.persistence.*;
import lombok.*;

@Entity(name="articles")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Getter
@ToString(exclude = "id")
public class Article extends BaseEntity{
    @Id
    @Column(name ="id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "writer_id", nullable = true)
    private User writer;

    @ManyToOne
    @JoinColumn(name = "board_id", nullable = true)
    private Board board;

    private String title;
    private String content;
}