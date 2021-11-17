package models.dto;

public class usuarioDTO implements java.io.Serializable{

    private int id;
    private String usuario;

    public usuarioDTO(int id, String usuario) {
        this.id = id;
        this.usuario = usuario;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }
}
