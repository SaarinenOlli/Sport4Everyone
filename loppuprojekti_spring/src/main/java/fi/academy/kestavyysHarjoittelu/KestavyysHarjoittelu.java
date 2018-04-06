package fi.academy.kestavyysHarjoittelu;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

// By Heidi ja Elina
// Tietokannan kestävyysharjoittelutaulua vastaava Entity-luokka

@Entity
public class KestavyysHarjoittelu {
    @Id @NotNull
    @GeneratedValue
    private int kestavyysHarjoitusId;
    @NotNull
    private int kayttajaId;
    // ei ole aivan varmaa vielä, onko LocalDate sopiva formaatti
    private LocalDate pvm;
    private Integer kestoMin;
    private String laji;
    private Integer matkaKm;

    public KestavyysHarjoittelu() {
    }

    public KestavyysHarjoittelu(@NotNull int kayttajaId, LocalDate pvm, Integer kestoMin, String laji, Integer matkaKm) {
        this.kayttajaId = kayttajaId;
        this.pvm = pvm;
        this.kestoMin = kestoMin;
        this.laji = laji;
        this.matkaKm = matkaKm;
    }

    public int getKestavyysHarjoitusId() {
        return kestavyysHarjoitusId;
    }

    public void setKestavyysHarjoitusId(int kestavyysHarjoitusId) {
        this.kestavyysHarjoitusId = kestavyysHarjoitusId;
    }

    public int getKayttajaId() {
        return kayttajaId;
    }

    public void setKayttajaId(int kayttajaId) {
        this.kayttajaId = kayttajaId;
    }

    public LocalDate getPvm() {
        return pvm;
    }

    public void setPvm(LocalDate pvm) {
        this.pvm = pvm;
    }

    public Integer getKestoMin() {
        return kestoMin;
    }

    public void setKestoMin(Integer kestoMin) {
        this.kestoMin = kestoMin;
    }

    public String getLaji() {
        return laji;
    }

    public void setLaji(String laji) {
        this.laji = laji;
    }

    public Integer getMatkaKm() {
        return matkaKm;
    }

    public void setMatkaKm(Integer matkaKm) {
        this.matkaKm = matkaKm;
    }
}