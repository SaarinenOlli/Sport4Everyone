package fi.academy.kayttaja;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class KayttajaKontrolleri {

    @Autowired KayttajaRepo kr;

    @GetMapping("/kayttajat")
    public Iterable<Kayttaja> kayttajat() {
        return kr.findAll();
    }
}
