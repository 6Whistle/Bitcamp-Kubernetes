package com.erichgamma.api.board.service;

import com.erichgamma.api.board.model.BoardDto;
import com.erichgamma.api.common.command.CommandService;
import com.erichgamma.api.common.query.QueryService;

public interface BoardService extends CommandService<BoardDto>, QueryService<BoardDto>{

}
