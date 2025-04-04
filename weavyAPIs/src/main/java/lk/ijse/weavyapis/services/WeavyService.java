package lk.ijse.weavyapis.services;

import okhttp3.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.io.IOException;

@Service
public class WeavyService {

    @Value("${weavy.api.url}")
    private String WEAVY_API_URL;

    @Value("${weavy.api.key}")
    private String WEAVY_API_KEY;

    private final OkHttpClient client = new OkHttpClient();

    public String createUser(String jsonBody) throws IOException {
        RequestBody body = RequestBody.create(jsonBody, MediaType.get("application/json"));
        Request request = new Request.Builder()
                .url(WEAVY_API_URL)
                .addHeader("Authorization", "Bearer " + WEAVY_API_KEY)
                .post(body)
                .build();

        try (Response response = client.newCall(request).execute()) {
            return response.body().string();
        }
    }

    public String getUsers() throws IOException {
        Request request = new Request.Builder()
                .url(WEAVY_API_URL)
                .addHeader("Authorization", "Bearer " + WEAVY_API_KEY)
                .build();

        try (Response response = client.newCall(request).execute()) {
            return response.body().string();
        }
    }
}
