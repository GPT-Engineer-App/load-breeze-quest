import { useState, useEffect } from "react";
import { Cat, Heart, Info, Paw, Moon, Sun, Menu, Star, Gift, Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

const catBreeds = [
  { name: "Siamese", description: "Vocal and social cats known for their distinctive color points.", popularity: 85 },
  { name: "Persian", description: "Long-haired cats with a sweet, gentle nature and round faces.", popularity: 78 },
  { name: "Maine Coon", description: "Large, friendly cats with tufted ears and long, fluffy tails.", popularity: 92 },
  { name: "Bengal", description: "Active, playful cats with a wild appearance resembling leopards.", popularity: 88 },
  { name: "Scottish Fold", description: "Known for their unique folded ears and owl-like appearance.", popularity: 75 },
];

const catFacts = [
  "Cats sleep for about 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats have over 20 vocalizations, including the meow.",
  "The first cat in space was French. Her name was Felicette.",
  "Cats can jump up to six times their length.",
  "A cat's nose print is unique, like a human's fingerprint.",
  "Cats can rotate their ears 180 degrees.",
  "The oldest known pet cat was found in a 9,500-year-old grave on Cyprus.",
];

const catImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1200px-Kittyply_edit1.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Sleeping_cat_on_her_back.jpg/1200px-Sleeping_cat_on_her_back.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1200px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg",
];

const catSounds = [
  { name: "Meow", audio: "https://example.com/meow.mp3" },
  { name: "Purr", audio: "https://example.com/purr.mp3" },
  { name: "Hiss", audio: "https://example.com/hiss.mp3" },
];

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [catLevel, setCatLevel] = useState(0);
  const [selectedSound, setSelectedSound] = useState(null);

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

  const increaseCatLevel = () => {
    setCatLevel((prevLevel) => Math.min(prevLevel + 10, 100));
  };

  const playSound = (sound) => {
    setSelectedSound(sound);
    // In a real application, you would play the audio here
    console.log(`Playing ${sound.name} sound`);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100'} transition-colors duration-300`}>
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

      <div className="max-w-5xl mx-auto p-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold mb-4 text-purple-800 flex items-center justify-center">
            <Cat className="mr-4 text-pink-600" size={64} /> Feline Fascination
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Discover the Wonderful World of Cats</p>
        </motion.div>

        <Carousel className="mb-12">
          <CarouselContent>
            {catImages.map((src, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <img
                    src={src}
                    alt={`Cat ${index + 1}`}
                    className="mx-auto object-cover w-full h-[600px] rounded-lg shadow-2xl"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      {index + 1}/{catImages.length}
                    </Badge>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Card className="mb-12 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <CardTitle className="text-3xl font-bold flex items-center">
              <Star className="mr-2" /> Cat Enthusiast Level
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Progress value={catLevel} className="w-full h-4 mb-4" />
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">{catLevel}% Cat Expert</span>
              <Button onClick={increaseCatLevel} className="bg-purple-500 hover:bg-purple-600">
                Level Up! <Gift className="ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12" id="about">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold flex items-center">
              <Info className="mr-2 text-blue-500" /> About Cats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl mb-6 leading-relaxed"
            >
              Cats are enigmatic creatures that have captivated humans for millennia. Known for their independence,
              agility, and affectionate nature, these furry companions continue to be one of the most popular pets worldwide.
              Their mysterious behavior and charming personalities make them a source of endless fascination and joy.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Did You Know?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Cats can make over 100 different sounds</li>
                    <li>A cat's hearing is much more sensitive than a human's</li>
                    <li>Cats spend 70% of their lives sleeping</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Cat Care Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Provide a balanced diet</li>
                    <li>Regular vet check-ups</li>
                    <li>Plenty of playtime and affection</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="characteristics" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="characteristics" id="characteristics">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Feline Features</CardTitle>
                <CardDescription>What makes cats unique?</CardDescription>
              </CardHeader>
              <CardContent>
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {[
                    "Excellent hunters with sharp claws and teeth",
                    "Flexible bodies and quick reflexes",
                    "Keen senses, especially hearing and night vision",
                    "Communicate through vocalizations, body language, and scent",
                    "Independent nature with strong personalities",
                    "Ability to purr, which can have healing properties"
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      className="flex items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"
                    >
                      <Paw className="mr-3 text-orange-500" /> {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds" id="breeds">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Cat Breeds</CardTitle>
                <CardDescription>Discover popular cat breeds and their unique traits</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                  <ul className="space-y-6">
                    {catBreeds.map((breed, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border-b pb-4"
                      >
                        <h3 className="font-semibold text-xl mb-2">{breed.name}</h3>
                        <p className={`mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{breed.description}</p>
                        <div className="flex items-center">
                          <span className="mr-2">Popularity:</span>
                          <Progress value={breed.popularity} className="w-1/2" />
                          <span className="ml-2">{breed.popularity}%</span>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold flex items-center">
              <Music className="mr-2 text-indigo-500" /> Cat Sounds
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {catSounds.map((sound, index) => (
                <Button
                  key={index}
                  onClick={() => playSound(sound)}
                  className={`p-4 ${selectedSound === sound ? 'bg-indigo-600' : 'bg-indigo-500'} hover:bg-indigo-600 text-white rounded-lg transition-colors`}
                >
                  <Music className="mr-2" /> {sound.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12" id="fact">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Cat Fact of the Day</CardTitle>
          </CardHeader>
          <CardContent>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFactIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-4"
              >
                <p className="text-xl mb-2 font-semibold">Did you know?</p>
                <p className="text-lg">{catFacts[currentFactIndex]}</p>
              </motion.div>
            </AnimatePresence>
            <Button onClick={nextFact} className="w-full">Next Fact</Button>
          </CardContent>
        </Card>

        <motion.div
          className="text-center mb-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setLikes(likes + 1)}
                  className="group text-xl py-6 px-8"
                >
                  <Heart className="mr-3 text-red-500 group-hover:animate-ping" size={28} />
                  Like This Page ({likes})
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Show your love for cats!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>

        <footer className="mt-16 text-center border-t pt-8">
          <p className={`text-xl italic mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            "Time spent with cats is never wasted." - Sigmund Freud
          </p>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Whether you're a cat owner or just an admirer, these furry friends continue to captivate us with their charm and mystery.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
