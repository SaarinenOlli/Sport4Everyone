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
    private String kayttajaId;
    private LocalDate pvm;
    private Integer kestoMin;
    private String laji;
    private Double matkaKm;

    public KestavyysHarjoittelu() {
    }

    public int getKestavyysHarjoitusId() {
        return kestavyysHarjoitusId;
    }

    public void setKestavyysHarjoitusId(int kestavyysHarjoitusId) {
        this.kestavyysHarjoitusId = kestavyysHarjoitusId;
    }

    public String getKayttajaId() {
        return kayttajaId;
    }

    public void setKayttajaId(String kayttajaId) {
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

    public Double getMatkaKm() {
        return matkaKm;
    }

    public void setMatkaKm(Double matkaKm) {
        this.matkaKm = matkaKm;
    }
}