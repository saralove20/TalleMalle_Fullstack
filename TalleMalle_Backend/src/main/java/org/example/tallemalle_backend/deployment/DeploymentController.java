package org.example.tallemalle_backend.deployment;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/deploy")
public class DeploymentController {
    @GetMapping("/test")
    public String test() {
        System.out.println("green v6");
        return "green v6";
    }
}
