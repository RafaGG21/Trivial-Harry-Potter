package models.services;

import entity.quest;

import java.util.List;

public interface IQuestService {

    List<quest> findAll();


    public  quest save(quest Pregunta);
}
