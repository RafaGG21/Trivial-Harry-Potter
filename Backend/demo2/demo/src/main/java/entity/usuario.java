package entity;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Entity;

@Entity
@Table( name = "usuario")
public class usuario implements java.io.Serializable {
    private int id;
    private String nombre;

    public usuario(int id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    public usuario() {

    }

    @Id
    @Column(name = "id", unique = true, nullable = false, length = 10)
    public int getId() {return id; }
    public void setId(int id) {this.id = id; }
    @Column(name = "nombre", nullable = false, length = 25)
    public String getNombre() {return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
}
