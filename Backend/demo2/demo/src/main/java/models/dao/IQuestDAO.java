package models.dao;

import entity.quest;
import org.springframework.data.repository.CrudRepository;


public interface IQuestDAO extends CrudRepository <quest,Long> {


    Object findByYear(Long year);
}
