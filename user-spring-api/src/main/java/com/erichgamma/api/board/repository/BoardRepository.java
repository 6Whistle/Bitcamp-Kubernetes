package com.erichgamma.api.board.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.erichgamma.api.board.model.Board;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {

    Boolean existsByBoardType(String boardType);

    Optional<Board> findByBoardType(String boardType);
    
}