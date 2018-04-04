package fi.academy.paino;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;

// by Heidi ja Elina
@RestController
public class PainoKontrolleri {

    @Autowired PainoRepo pr;

    // Hakee kaikki painotiedot
    @GetMapping("/painot")
    public Iterable<Paino> painot() {
        return pr.findAll();
    }

    // Hakee yhden käyttäjän painotiedot käyttäjäid:n perusteella
//    @GetMapping ("/painot/{id}")
//    public Iterable<PainoTaulu> yhdenKayttajanPainot(@PathVariable(name = "id") int id){
//       return pr.findAllBykayttajaId(id);
//    }

    // Hakee yhden painotiedon painoid:n perusteella
    @GetMapping("/painot/{id}")
    public ResponseEntity<Paino> etsiTiettyPaino(@PathVariable(name="id") int id) {
        Optional<Paino> optpaino = pr.findById(id);
        if (!optpaino.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(optpaino.get());
    }

    // Yhden painotiedon poistaminen painoid:n perusteella
    @DeleteMapping("/painot/{id}")
    public ResponseEntity<String> poistaPainoTieto(@PathVariable(name="id") int id) {
        // jos annettua id:tä ei löydy, palautetaan virheilmoitus
        if (!pr.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        // jos annettu id löytyy, sitä vastaava painotieto poistetaan
        pr.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // Uuden painotiedon lisääminen tietokantaan (lomake)
    @PostMapping("/painot")
    public ResponseEntity<?> uusiPainoTieto(@RequestBody Paino paino) throws URISyntaxException {
        // Tallennetaan lomakkeelta saatu painotieto
        pr.save(paino);
        URI location = UriComponentsBuilder.newInstance()
                .scheme("http")
                .host("localhost")
                .port(8080)
                .path("/painot/{id}")
                .buildAndExpand(paino.getPainoId())
                .toUri();
        return ResponseEntity.created(location).build();
    }

    // Tietokannassa jo olevan painotiedon muokkaaminen painoid:n perusteella (lomake)
    @PutMapping("/painot/{id}")
    public ResponseEntity<Paino> muokkaaPainoTietoa(@PathVariable(name="id") int id, @RequestBody Paino paino) {
        Optional<Paino> optpaino = pr.findById(id);
        // Jos id:n perusteella ei löydy painotietoa, palautetaan virheilmoitus
        if (!optpaino.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        // Optional.get() -> jos ei onnistu, heittää RunTimeExceptionin
        Paino paivitettava = optpaino.orElseThrow(RuntimeException::new);
        paivitettava.paivitaTiedot(paino); // Päivitetään paino(kg) ja pvm
        pr.save(paivitettava);
        return ResponseEntity.ok(paivitettava);
    }
}