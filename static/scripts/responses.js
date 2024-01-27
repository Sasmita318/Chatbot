function getBotResponse(input) 
{
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
    
    // Simple responses
    if (input == "hello") {
        return "Hello there!";
     } else if (input == "hi") {
        return "Hello there!";
     } else if (input == "hey!") {
        return "Hello there!";
     } else if (input == "how are you") {
        return "Fine! Thank You. How may I help you";
     } else if (input == "what's up?") {
        return "Trying to help you";
    }
    else if (input == "Where college is situated") {
      return "Pathragadia, Patia, Bhubaneswar";}
      if (input == "location") {
        return " Pathragadia, Patia, Bhubaneswar";
        } else if (input == "where is the college located") {
         return "Pathragadia, Patia, Bhubaneswar";
        }else if (input == "where college is situated?") {
         return "Pathragadia, Patia, Bhubaneswar";
        } else if (input == "tell me about college location") {
         return "Pathragadia, Patia, Bhubaneswar";
         }
         if (input == "fee structure") {
            return "For 1st Year: 48000,For 2nd Year: 46000, For 3rd Year: 46000"
            } 
            else if (input == "tell me about course fee")
             {
             return "For 1st Year: 48000,For 2nd Year: 46000,For 3rd Year: 46000";
            } 
            else if (input == "course fee") {
             return "For 1st Year: 48000,For 2nd Year: 46000,For 3rd Year: 46000";
            }
             if (input == "fee structure") 
     {
        return "For 1st Year: 48000,For 2nd Year: 46000, For 3rd Year: 46000"
        } 
        else if (input == "tell me about course fee")
         {
         return "For 1st Year: 48000,For 2nd Year: 46000,For 3rd Year: 46000";
        } 
        else if (input == "course fee") {
         return "For 1st Year: 48000, For 2nd Year: 46000,For 3rd Year: 46000";
        } else if (input == "what is the course fee") {
         return "For 1st Year: 48000,For 2nd Year: 46000,For 3rd Year: 46000";
    }
    if (input == "courses offered") {
      return "CIVIL ENGINEERING,COMPUTER SCIENCE AND ENGINEERING,ELECTRICAL ENGINEERINGMECHANICAL ENGINEERING";
   } else if (input == "types of department") {
       return "CIVIL ENGINEERING,COMPUTER SCIENCE AND ENGINEERINGELECTRICAL ENGINEERINGMECHANICAL ENGINEERING";
   } else if (input == "department") {
      return "CIVIL ENGINEERING,COMPUTER SCIENCE AND ENGINEERING,ELECTRICAL ENGINEERINGMECHANICAL ENGINEERING";
   } else if (input == "streams") {
      return "CIVIL ENGINEERING,COMPUTER SCIENCE AND ENGINEERING,ELECTRICAL ENGINEERINGMECHANICAL ENGINEERING";
   } else if (input == "tell me about branches available") {
      return "CIVIL ENGINEERING,COMPUTER SCIENCE AND ENGINEERING,ELECTRICAL ENGINEERINGMECHANICAL ENGINEERING";
   } else if (input == "how many departments are available") {
      return "CIVIL ENGINEERING,COMPUTER SCIENCE AND ENGINEERING,ELECTRICAL ENGINEERINGMECHANICAL ENGINEERING";
   }
   if (input == "admission process is started or not") {
      return "Yes, we have started our admission process";
   } else if (input == "admission Process") {
      return "Admission process is started";
   } else if (input == "when is the admission will start") {
      return "We have already started the admission process";
   }
   if (input == "college Hostel") {
      return "Yes we provide separate hostel for boys and girls";
   } else if (input == "hostel for students") {
      return "We provide separate hostel for boys and girls";
   } else if (input == "hostel") {
      return "We provide separate hostel for boys and girls";
   } else if (input == "is hostel available") {
      return "Yes we provide separate hostel for boys and girls";
   } else if (input == "hostel is there") {
      return "Yes we provide separate hostel for boys and girls";
   } else {
      return "Try asking something else!";
  }
}