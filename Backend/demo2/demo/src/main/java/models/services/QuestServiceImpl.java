package models.services;

import java.util.List;
import java.util.Optional;

import entity.quest;
import models.dao.IQuestDAO;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Service;

@Service
public class QuestServiceImpl implements IQuestService{

    @Autowired
    private IQuestDAO Questdao;



    @Override
    @Transactional(readOnly=true)
    public List<quest> findAll() {
        return (List<quest>)Questdao.findAll();
    }

    @Override
    @Transactional
    public quest save(quest pregunta) {
        return Questdao.save(pregunta);
    }

}
