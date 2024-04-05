package com.erichgamma.api.crawler.service;

import lombok.Getter;

import java.util.Map;

import com.erichgamma.api.crawler.repository.CrawlerRepository;

public class CrawlerServiceImpl implements CrawlerService {

    @Getter
    private static CrawlerServiceImpl instance = new CrawlerServiceImpl();
    private CrawlerRepository crawlerRepository;
    private CrawlerServiceImpl(){
        crawlerRepository = CrawlerRepository.getInstance();
    };


    @Override
    public Map<String, ?> findNamesFromWeb(Map<String, String> paramMap){
        return crawlerRepository.save(paramMap);
    }
}
