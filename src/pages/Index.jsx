import { useState, useEffect } from "react";
import { Cat, Heart, Info, Paw, Moon, Sun, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const catBreeds = [
  { name: "Siamese", description: "Vocal and social cats known for their distinctive color points." },
  { name: "Persian", description: "Long-haired cats with a sweet, gentle nature and round faces." },
  { name: "Maine Coon", description: "Large, friendly cats with tufted ears and long, fluffy tails." },
  { name: "Bengal", description: "Active, playful cats with a wild appearance resembling leopards." },
  { name: "Scottish Fold", description: "Known for their unique folded ears and owl-like appearance." },
];

const catFacts = [
  "Cats sleep for about 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats have over 20 vocalizations, including the meow.",
  "The first cat in space was French. Her name was Felicette.",
  "Cats can jump up to six times their length.",
];

const catImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1200px-Kittyply_edit1.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Sleeping_cat_on_her_back.jpg/1200px-Sleeping_cat_on_her_back.jpg",
];

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const nextFact = () => {
    setCurrentFactIndex((prevIndex) => (prevIndex + 1) % catFacts.length);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-purple-100 to-pink-100'} transition-colors duration-300`}>
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="fixed top-4 left-4 z-50">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="flex flex-col space-y-4">
            <a href="#about" className="text-lg font-semibold">About Cats</a>
            <a href="#characteristics" className="text-lg font-semibold">Characteristics</a>
            <a href="#breeds" className="text-lg font-semibold">Breeds</a>
            <a href="#fact" className="text-lg font-semibold">Cat Fact</a>
          </nav>
        </SheetContent>
      </Sheet>

      <Button
        variant="outline"
        size="icon"
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50"
      >
        {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>

      <div className="max-w-4xl mx-auto p-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-8 text-center text-purple-800 flex items-center justify-center"
        >
          <Cat className="mr-4 text-pink-600" size={48} /> Feline Fascination
        </motion.h1>

        <Carousel className="mb-8">
          <CarouselContent>
            {catImages.map((src, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={src}
                    alt={`Cat ${index + 1}`}
                    className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-2xl"
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Card className="mb-8" id="about">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold flex items-center">
              <Info className="mr-2 text-blue-500" /> About Cats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl mb-4"
            >
              Cats are enigmatic creatures that have captivated humans for millennia. Known for their independence,
              agility, and affectionate nature, these furry companions continue to be one of the most popular pets worldwide.
            </motion.p>
          </CardContent>
        </Card>

        <Tabs defaultValue="characteristics" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="characteristics" id="characteristics">
            <Card>
              <CardHeader>
                <CardTitle>Feline Features</CardTitle>
                <CardDescription>What makes cats unique?</CardDescription>
              </CardHeader>
              <CardContent>
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                  className="list-none space-y-2"
                >
                  {[
                    "Excellent hunters with sharp claws and teeth",
                    "Flexible bodies and quick reflexes",
                    "Keen senses, especially hearing and night vision",
                    "Communicate through vocalizations, body language, and scent"
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      className="flex items-center"
                    >
                      <Paw className="mr-2 text-orange-500" /> {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds" id="breeds">
            <Card>
              <CardHeader>
                <CardTitle>Cat Breeds</CardTitle>
                <CardDescription>Discover popular cat breeds</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                  <ul className="space-y-4">
                    {catBreeds.map((breed, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border-b pb-2"
                      >
                        <h3 className="font-semibold text-lg">{breed.name}</h3>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{breed.description}</p>
                      </motion.li>
                    ))}
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mb-8" id="fact">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Cat Fact of the Day</CardTitle>
          </CardHeader>
          <CardContent>
            <AnimatePresence mode="wait">
              <motion.p
                key={currentFactIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-lg mb-4"
              >
                {catFacts[currentFactIndex]}
              </motion.p>
            </AnimatePresence>
            <Button onClick={nextFact}>Next Fact</Button>
          </CardContent>
        </Card>

        <motion.div
          className="text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => setLikes(likes + 1)}
            className="group"
          >
            <Heart className="mr-2 text-red-500 group-hover:animate-ping" />
            Like This Page ({likes})
          </Button>
        </motion.div>

        <footer className="mt-12 text-center">
          <p className={`text-lg italic ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Whether you're a cat owner or just an admirer, these furry friends continue to captivate us with their charm and mystery.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
