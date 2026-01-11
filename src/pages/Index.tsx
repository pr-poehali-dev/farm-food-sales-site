import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const categories = ['Все', 'Молочные', 'Мясные', 'Овощи', 'Яйца', 'Консервация'];

  const products = [
    {
      id: 1,
      name: 'Молоко фермерское',
      category: 'Молочные',
      price: 120,
      unit: 'литр',
      image: 'https://cdn.poehali.dev/projects/190308b3-9d64-4367-934c-90b9cbcddde9/files/f9c20fc8-24b1-43d8-9dbe-2c3b2ec9fa08.jpg',
      description: 'Свежее натуральное молоко от наших коров'
    },
    {
      id: 2,
      name: 'Яйца домашние',
      category: 'Яйца',
      price: 150,
      unit: '10 шт',
      image: 'https://cdn.poehali.dev/projects/190308b3-9d64-4367-934c-90b9cbcddde9/files/ef817125-9a15-4330-aa72-fe6bff1816f7.jpg',
      description: 'Свежие яйца от кур свободного выгула'
    },
    {
      id: 3,
      name: 'Творог домашний',
      category: 'Молочные',
      price: 180,
      unit: 'кг',
      image: 'https://cdn.poehali.dev/projects/190308b3-9d64-4367-934c-90b9cbcddde9/files/f9c20fc8-24b1-43d8-9dbe-2c3b2ec9fa08.jpg',
      description: 'Нежный творог из натурального молока'
    },
    {
      id: 4,
      name: 'Мёд цветочный',
      category: 'Консервация',
      price: 500,
      unit: 'литр',
      image: 'https://cdn.poehali.dev/projects/190308b3-9d64-4367-934c-90b9cbcddde9/files/ef817125-9a15-4330-aa72-fe6bff1816f7.jpg',
      description: 'Натуральный мёд с нашей пасеки'
    },
    {
      id: 5,
      name: 'Говядина',
      category: 'Мясные',
      price: 650,
      unit: 'кг',
      image: 'https://cdn.poehali.dev/projects/190308b3-9d64-4367-934c-90b9cbcddde9/files/307c54ad-9524-471c-a2d5-f17036e6b157.jpg',
      description: 'Фермерская говядина от коров на свободном выпасе'
    },
    {
      id: 6,
      name: 'Картофель',
      category: 'Овощи',
      price: 40,
      unit: 'кг',
      image: 'https://cdn.poehali.dev/projects/190308b3-9d64-4367-934c-90b9cbcddde9/files/ef817125-9a15-4330-aa72-fe6bff1816f7.jpg',
      description: 'Органический картофель с наших полей'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Секреты идеальных сырников',
      excerpt: 'Делимся рецептом пышных сырников из нашего домашнего творога. Простые ингредиенты и пошаговая инструкция.',
      date: '15 января 2026',
      image: 'https://cdn.poehali.dev/projects/190308b3-9d64-4367-934c-90b9cbcddde9/files/f9c20fc8-24b1-43d8-9dbe-2c3b2ec9fa08.jpg'
    },
    {
      id: 2,
      title: 'Как выбрать свежие яйца',
      excerpt: 'Простые способы определить свежесть яиц и правила их хранения в домашних условиях.',
      date: '10 января 2026',
      image: 'https://cdn.poehali.dev/projects/190308b3-9d64-4367-934c-90b9cbcddde9/files/ef817125-9a15-4330-aa72-fe6bff1816f7.jpg'
    },
    {
      id: 3,
      title: 'Польза натурального мёда',
      excerpt: 'Всё о полезных свойствах цветочного мёда и способах его применения для здоровья и красоты.',
      date: '5 января 2026',
      image: 'https://cdn.poehali.dev/projects/190308b3-9d64-4367-934c-90b9cbcddde9/files/ef817125-9a15-4330-aa72-fe6bff1816f7.jpg'
    }
  ];

  const filteredProducts = selectedCategory === 'Все'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sprout" size={32} />
            <h1 className="text-2xl font-bold">Ферма «Родные просторы»</h1>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#catalog" className="hover:text-accent transition-colors">Каталог</a>
            <a href="#about" className="hover:text-accent transition-colors">О ферме</a>
            <a href="#delivery" className="hover:text-accent transition-colors">Доставка</a>
            <a href="#blog" className="hover:text-accent transition-colors">Блог</a>
            <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
          </div>
          <Button variant="secondary" className="hidden md:flex items-center gap-2">
            <Icon name="ShoppingCart" size={20} />
            Корзина
          </Button>
        </nav>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/190308b3-9d64-4367-934c-90b9cbcddde9/files/307c54ad-9524-471c-a2d5-f17036e6b157.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Натуральные продукты с нашей фермы</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Выращиваем с любовью, доставляем с заботой
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6">
            Смотреть каталог
          </Button>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши продукты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Только свежие и натуральные продукты от наших животных и с наших полей
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat)}
                className="animate-scale-in"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-primary">{product.price} ₽</p>
                      <p className="text-sm text-muted-foreground">за {product.unit}</p>
                    </div>
                    <Button className="gap-2">
                      <Icon name="ShoppingCart" size={18} />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/190308b3-9d64-4367-934c-90b9cbcddde9/files/307c54ad-9524-471c-a2d5-f17036e6b157.jpg"
                alt="Наша ферма"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl font-bold mb-6">О нашей ферме</h2>
              <p className="text-lg mb-4 text-muted-foreground">
                Ферма «Родные просторы» работает уже более 15 лет. Мы начинали с небольшого семейного хозяйства
                и выросли в крупное фермерское предприятие, сохранив традиции качества и заботы о природе.
              </p>
              <p className="text-lg mb-4 text-muted-foreground">
                Наши животные содержатся на свободном выпасе, питаются натуральными кормами без гормонов
                и антибиотиков. Овощи и фрукты выращиваем без химических удобрений и пестицидов.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-3xl font-bold text-primary mb-2">15+</p>
                  <p className="text-sm text-muted-foreground">лет опыта</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-3xl font-bold text-primary mb-2">50+</p>
                  <p className="text-sm text-muted-foreground">видов продуктов</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-3xl font-bold text-primary mb-2">1000+</p>
                  <p className="text-sm text-muted-foreground">довольных клиентов</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-3xl font-bold text-primary mb-2">100%</p>
                  <p className="text-sm text-muted-foreground">натуральные</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Доставка и оплата</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Удобные условия доставки свежих продуктов прямо к вашему дому
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center animate-scale-in">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Truck" size={32} className="text-secondary" />
                </div>
                <CardTitle>Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Доставка по городу в течение 2-4 часов после оформления заказа
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Wallet" size={32} className="text-secondary" />
                </div>
                <CardTitle>Удобная оплата</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Наличными курьеру, картой онлайн или через СБП при получении
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Gift" size={32} className="text-secondary" />
                </div>
                <CardTitle>Акции и бонусы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Бесплатная доставка при заказе от 2000 ₽ и накопительные скидки
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Tabs defaultValue="city" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="city">По городу</TabsTrigger>
                <TabsTrigger value="region">За город</TabsTrigger>
              </TabsList>
              <TabsContent value="city" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Доставка по городу</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">До 1000 ₽</span>
                      <span className="text-muted-foreground">200 ₽</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">От 1000 ₽ до 2000 ₽</span>
                      <span className="text-muted-foreground">100 ₽</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">От 2000 ₽</span>
                      <span className="text-secondary font-bold">Бесплатно</span>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="region" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Доставка за город</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">До 10 км</span>
                      <span className="text-muted-foreground">300 ₽</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">От 10 до 30 км</span>
                      <span className="text-muted-foreground">500 ₽</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">От 30 км</span>
                      <span className="text-muted-foreground">По договоренности</span>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="blog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Блог с рецептами</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полезные советы и проверенные рецепты с использованием наших продуктов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl hover:text-secondary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto gap-2">
                    Читать далее
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Остались вопросы? Мы с радостью на них ответим
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Форма обратной связи</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                      <Input
                        type="text"
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email или телефон</label>
                      <Input
                        type="text"
                        placeholder="ivan@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше сообщение</label>
                      <Textarea
                        placeholder="Расскажите, чем мы можем помочь..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" size={24} className="text-secondary" />
                    Адрес
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Московская область, Истринский район,<br />
                    село Павловское, ул. Фермерская, 12
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" size={24} className="text-secondary" />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    +7 (495) 123-45-67<br />
                    +7 (916) 987-65-43
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" size={24} className="text-secondary" />
                    Режим работы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Пн-Пт: 8:00 - 20:00<br />
                    Сб-Вс: 9:00 - 18:00
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sprout" size={28} />
                <h3 className="text-xl font-bold">Ферма «Родные просторы»</h3>
              </div>
              <p className="text-primary-foreground/80">
                Натуральные продукты с любовью к природе и заботой о вашем здоровье
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#catalog" className="hover:text-accent transition-colors">Каталог</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">О ферме</a></li>
                <li><a href="#delivery" className="hover:text-accent transition-colors">Доставка</a></li>
                <li><a href="#blog" className="hover:text-accent transition-colors">Блог</a></li>
                <li><a href="#contacts" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Phone" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-6 text-center text-primary-foreground/80">
            <p>© 2026 Ферма «Родные просторы». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
