package fi.academy;

import fi.academy.kestavyysHarjoittelu.KestavyysHarjoittelu;
import fi.academy.kestavyysHarjoittelu.KestavyysKontrolleri;
import fi.academy.kestavyysHarjoittelu.KestavyysRepo;
import fi.academy.paino.Paino;
import fi.academy.paino.PainoRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import java.time.LocalDate;

@SpringBootApplication
public class Application {

	@Autowired
	PainoRepo pr;
	@Autowired
	KestavyysRepo ker;

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

//  by Heidi Ja Elina
//	Väliaikaisen tietokannan käyttöön luotua dataa ja CommandlineRunner
//	@Bean
//	public CommandLineRunner koira() {
//		return (args) -> {
//			Paino eka = new Paino("k", LocalDate.of(2018, 2, 2), 75);
//			Paino toka = new Paino("k", LocalDate.of(2018, 3, 15), 80);
//			Paino kolmas = new Paino("l", LocalDate.of(2018, 4, 1), 72);
//			Paino neljas = new Paino("l", LocalDate.of(2018, 4, 5), 79);
//			Paino viides = new Paino("l", LocalDate.of(2018, 3, 31), 70);
//			Paino kuudes = new Paino("n", LocalDate.of(2018, 3, 12), 74);
//
//			pr.save(eka);
//			pr.save(toka);
//			pr.save(kolmas);
//			pr.save(neljas);
//			pr.save(viides);
//			pr.save(kuudes);
//
//			ker.save(new KestavyysHarjoittelu("k", LocalDate.now(), 16, "uinti", 0.75));
//			ker.save(new KestavyysHarjoittelu("k", LocalDate.of(2018,4,8), 66, "uinti", 2.5));
//			ker.save(new KestavyysHarjoittelu("k", LocalDate.now(), 110, "pyöräily", 60.0));
//			ker.save(new KestavyysHarjoittelu("k", LocalDate.of(2018,4,10), 69, "pyöräily", 25.0));
//			ker.save(new KestavyysHarjoittelu("k", LocalDate.now(), 75, "juoksu", 17.3));
//			ker.save(new KestavyysHarjoittelu("k", LocalDate.of(2018,4,11), 46, "juoksu", 10.0));
//
//			ker.save(new KestavyysHarjoittelu("l", LocalDate.now(), 16, "uinti", 0.75));
//			ker.save(new KestavyysHarjoittelu("l", LocalDate.of(2018,4,8), 66, "uinti", 2.5));
//			ker.save(new KestavyysHarjoittelu("l", LocalDate.now(), 110, "pyöräily", 60.0));
//			ker.save(new KestavyysHarjoittelu("l", LocalDate.of(2018,4,8), 66, "pyöräily", 35.0));
//			ker.save(new KestavyysHarjoittelu("l", LocalDate.now(), 75, "juoksu", 17.3));
//			ker.save(new KestavyysHarjoittelu("l", LocalDate.of(2018,4,10), 100, "juoksu", 21.5));
//
//			ker.save(new KestavyysHarjoittelu("m", LocalDate.now(), 16, "uinti", 0.75));
//			ker.save(new KestavyysHarjoittelu("m", LocalDate.of(2018,4,7), 36, "uinti", 1.2));
//			ker.save(new KestavyysHarjoittelu("m", LocalDate.now(), 110, "pyöräily", 60.0));
//			ker.save(new KestavyysHarjoittelu("m", LocalDate.of(2018,4,8), 66, "pyöräily", 35.0));
//			ker.save(new KestavyysHarjoittelu("m", LocalDate.now(), 75, "juoksu", 17.3));
//			ker.save(new KestavyysHarjoittelu("m", LocalDate.of(2018,4,10), 100, "juoksu", 21.5));
//		} ;
//	}
}

