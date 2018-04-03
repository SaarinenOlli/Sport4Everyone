package fi.academy;

import fi.academy.paino.PainoRepo;
import fi.academy.paino.PainoTaulu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
public class LoppuprojektiApplication {

	@Autowired
	PainoRepo pr;

	public static void main(String[] args) {
		SpringApplication.run(LoppuprojektiApplication.class, args);
	}


//	Väliaikesn tietokannan käyttöön luotua dataa ja CommandlineRunner by Heidi Ja Elina
	@Bean
	public CommandLineRunner koira() {
		return (args) -> {
			PainoTaulu eka = new PainoTaulu(1, LocalDate.now(), 75);
			PainoTaulu toka = new PainoTaulu(2, LocalDate.now(), 80);
			PainoTaulu kolmas = new PainoTaulu(1, LocalDate.now(), 72);
			PainoTaulu neljas = new PainoTaulu(2, LocalDate.now(), 79);
			PainoTaulu viides = new PainoTaulu(1, LocalDate.now(), 70);
			PainoTaulu kuudes = new PainoTaulu(2, LocalDate.now(), 74);

			pr.save(eka);
			pr.save(toka);
			pr.save(kolmas);
			pr.save(neljas);
			pr.save(viides);
			pr.save(kuudes);
		} ;
	}
}

