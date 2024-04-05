package com.erichgamma.api.crawler.service;

import java.util.Map;

public interface CrawlerService {
    Map<String, ?> findNamesFromWeb(Map<String, String> paramMap);
}
