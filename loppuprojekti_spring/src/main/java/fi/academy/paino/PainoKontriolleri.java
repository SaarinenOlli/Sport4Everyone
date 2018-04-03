package fi.academy.paino;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PainoKontriolleri {

    @Autowired
    PainoRepo pr;

    // Palauttaa painotaulusta kaikki tiedot by Heidi ja Elina
    @GetMapping ("/painotaulu")
    public Iterable<PainoTaulu> painot() {
        return pr.findAll();
    }

    // Palauttaa painot käyttäjän mukaan by Heidi ja Elina
    @GetMapping ("/painot/{id}")
    public Iterable<PainoTaulu> yhdenKayttajanPainot(@PathVariable(name = "id") int id){
       return pr.findAllBykayttajaId(id);
    }
}
