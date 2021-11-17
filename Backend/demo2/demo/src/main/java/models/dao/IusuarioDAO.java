package models.dao;


import entity.usuario;
import org.springframework.data.repository.CrudRepository;

public interface IusuarioDAO extends CrudRepository<usuario,Long> {
}
