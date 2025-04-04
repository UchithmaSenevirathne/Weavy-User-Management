package lk.ijse.weavyapis.controllers;

import lk.ijse.weavyapis.services.WeavyService;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;

@RestController
@RequestMapping("/myapi/users")
public class UserController {

    private final WeavyService weavyService;

    public UserController(WeavyService weavyService) {
        this.weavyService = weavyService;
    }

    @PostMapping
    public String createUser(@RequestBody String userJson) throws IOException {
        return weavyService.createUser(userJson);
    }

    @GetMapping
    public String getUsers() throws IOException {
        return weavyService.getUsers();
    }

    @PutMapping("/{uid}")
    public String updateUser(@PathVariable String uid, @RequestBody String userJson) throws IOException {
        return weavyService.updateUser(uid, userJson);
    }

    @DeleteMapping("/{uid}")
    public String deleteUser(@PathVariable String uid) throws IOException {
        return weavyService.deleteUser(uid);
    }
}

