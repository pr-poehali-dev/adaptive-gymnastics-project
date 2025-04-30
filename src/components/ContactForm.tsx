
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время для уточнения деталей.",
        variant: "default",
      });
      
      // Сбросить форму
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h3 className="text-2xl font-bold mb-4">Запись на консультацию</h3>
      <p className="text-muted-foreground mb-6">
        Оставьте свои контактные данные, и мы свяжемся с вами для записи на бесплатную консультацию или первое занятие
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Ваше имя</Label>
          <Input id="name" placeholder="Иван Иванов" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Телефон</Label>
          <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="example@mail.ru" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Сообщение (необязательно)</Label>
          <Textarea id="message" placeholder="Расскажите о ваших целях или запросах..." />
        </div>
        
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Отправка...
            </>
          ) : (
            "Записаться"
          )}
        </Button>
        
        <p className="text-xs text-muted-foreground text-center mt-4">
          Нажимая кнопку "Записаться", вы соглашаетесь с политикой обработки персональных данных
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
