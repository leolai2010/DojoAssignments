package com.leolai.event.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.leolai.event.models.Message;
import com.leolai.event.models.User;
import com.leolai.event.repositories.MessageRepository;
import com.leolai.event.repositories.UserRepository;

@Service
public class MessageService {
	private final MessageRepository messageRepository;
	private final UserRepository userRepository;
	
	public MessageService(MessageRepository messageRepository, UserRepository userRepository) {
		this.userRepository = userRepository;
		this.messageRepository = messageRepository;
	}
    public List<User> allUser() {
    	return (List<User>) userRepository.findAll();
    }
    public List<Message> allMessage() {
    	return (List<Message>) messageRepository.findAll();
    }
    public Message createMessage(Message message) {
    	return messageRepository.save(message);
    }
}
