package com.techelevator.dao;

import java.util.List;

import com.techelevator.model.Card;

public interface CardDAO {
	
	List<Card> getAllCards(String user);
	
	Card getCardById(int cardId);
	
	List<Card> getCardsBySubject(String user, String subject);
	
	List<Card> getCardsByKeyword(String user, String keyword);
	
	void createSubject(String subject);

	void createCard(String question, String answer, String subject, String deckName, String keywords, String user);
	
	void editCard(String question, String answer, String subject, int cardId);
	
	void deleteCard(int cardId);
	

}
