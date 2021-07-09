const Discord=require("discord.js");
const cil=new Discord.Client();
cil.on("message",message=>{
console.log("ahmed"+message.content);
   if(message.content=='funy' || message.content=='funny' || message.content=='gulme' || message.content=='مضحك'){
     var x1=parseInt(Math.random()*10);

     switch(x1){
       case 0:
        message.channel.send( {files: ["./image/funny/pr1.jpg"]});
        break;
        case 1:
          message.channel.send({files: ["./image/funny/pr2.jpg"]});
          break;
          case 2:
            message.channel.send({files: ["./image/funny/pr3.png"]});
            break;
            case 3:
              message.channel.send({files: ["./image/funny/pr4.jpg"]});
              break;
              case 4:
                message.channel.send({files: ["././image/funny/pr5.jpg"]});
                break;
                case 5:
                  message.channel.send({files: ["./image/funny/pr6.png"]});
                  break;
                  case 6:
                    message.channel.send({files: ["./image/funny/pr7.jpg"]});
                    break;
                    case 7:
                      message.channel.send({files: ["./image/funny/pr8.jpg"]});
                      break;
                      case 8:
                        message.channel.send({files: ["./image/funny/pr9.png"]});
                        break;
                        case 9:
                          message.channel.send({files: ["./image/funny/pr10.png"]});
                          break;
      }
      }
   else if(message.content=='bot' || message.content=='boot' || message.content=='بوت' || message.content=='robot'){
   var x2=parseInt(Math.random()*10);
   switch(x2){
    case 0:
     message.channel.send( {files: ["./image/bot/pr1.png"]});
     break;
     case 1:
       message.channel.send({files: ["./image/bot/pr2.png"]});
       break;
       case 2:
        message.channel.send({files: ["./image/bot/pr3.png"]});
        break;
        case 3:
          message.channel.send({files: ["./image/bot/pr4.jpg"]});
          break;
          case 4:
            message.channel.send({files: ["./image/bot/pr5.png"]});
            break;
            case 5:
              message.channel.send({files: ["./image/bot/pr6.jpg"]});
              break;
              case 6:
                message.channel.send({files: ["./image/bot/pr7.jpg"]});
                break;
                case 7:
                  message.channel.send({files: ["./image/bot/pr8.jpg"]});
                  break;
                  case 8:
                    message.channel.send({files: ["./image/bot/pr9.jpg"]});
                    break;
                    case 9:
                      message.channel.send({files: ["./image/bot/pr10.png"]});
                      break;
   }
  }
  else if(message.content=='angry' || message.content=='angy' ||  message.content=='kızgın'){
    var x3=parseInt(Math.random()*10);
    switch(x3){
     case 0:
      message.channel.send( {files: ["./image/angry/pr1.jpg"]});
      break;
      case 1:
        message.channel.send({files: ["./image/angry/pr2.jpg"]});
        break;
        case 2:
         message.channel.send({files: ["./image/angry/pr3.jpg"]});
         break;
         case 3:
           message.channel.send({files: ["./image/angry/pr4.jpg"]});
           break;
           case 4:
             message.channel.send({files: ["./image/angry/pr5.jpg"]});
             break;
             case 5:
               message.channel.send({files: ["./image/angry/pr6.jpg"]});
               break;
               case 6:
                 message.channel.send({files: ["./image/angry/pr7.jpg"]});
                 break;
                 case 7:
                   message.channel.send({files: ["./image/angry/pr8.jpg"]});
                   break;
                   case 8:
                     message.channel.send({files: ["./image/angry/pr9.jpg"]});
                     break;
                     case 9:
                       message.channel.send({files: ["../image/angry/pr10.jpg"]});
                       break;
    }
   }

})

cil.login("ODU5NzUwOTg5OTg4NjI2NDQy.YNxPgQ.d7Yao96386HSZ-luTEZz0PlJXBg");
