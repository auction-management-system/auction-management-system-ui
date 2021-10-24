package com.bits.cpad.auctionmanagementsystem.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AuctionManagementSystemController {

    @GetMapping("/")
    public String getHomePage() {
        return "welcome";
    }

}
