package org.example.tallemalle_backend.deployment;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/deploy")
public class DeploymentController {
    @GetMapping("/test")
    public void test() {
        System.out.println("blue v5");
    }
}
