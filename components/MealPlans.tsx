import React, { useState } from 'react';
import { Icon } from './Icon';
import { useTranslation } from 'react-i18next';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  prepTime: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  category: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  difficulty: 'easy' | 'medium' | 'hard';
  image: string;
  ingredients: string[];
  instructions: string[];
}

export const MealPlans: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const recipes: Recipe[] = [
    {
      id: '1',
      title: 'Owsianka z jagodami',
      description: 'Pyszna i pożywna owsianka idealna na rozpoczęcie dnia postu',
      prepTime: '10 min',
      calories: 320,
      protein: 12,
      carbs: 45,
      fat: 8,
      category: 'breakfast',
      difficulty: 'easy',
      image: 'oatmeal',
      ingredients: ['płatki owsiane', 'mleko migdałowe', 'jagody', 'miód', 'cynamon'],
      instructions: [
        'Gotuj płatki owsiane z mlekiem przez 5 minut',
        'Dodaj jagody i miód',
        'Posyp cynamonem i podawaj'
      ]
    },
    {
      id: '2',
      title: 'Sałatka z kurczakiem',
      description: 'Lekka i sycąca sałatka pełna białka i warzyw',
      prepTime: '15 min',
      calories: 380,
      protein: 35,
      carbs: 20,
      fat: 18,
      category: 'lunch',
      difficulty: 'easy',
      image: 'salad',
      ingredients: ['pierś z kurczaka', 'mix sałat', 'pomidory', 'ogórek', 'oliwa z oliwek'],
      instructions: [
        'Grilluj pierś z kurczaka',
        'Pokrój warzywa',
        'Wymieszaj wszystko z oliwą'
      ]
    },
    {
      id: '3',
      title: 'Łosoś z warzywami',
      description: 'Zdrowy obiad bogaty w omega-3 i antyoksydanty',
      prepTime: '25 min',
      calories: 420,
      protein: 38,
      carbs: 15,
      fat: 24,
      category: 'dinner',
      difficulty: 'medium',
      image: 'salmon',
      ingredients: ['filet z łososia', 'brokuły', 'marchewka', 'cytryna', 'zioła'],
      instructions: [
        'Piecz łososia w 180°C przez 15 minut',
        'Gotuj warzywa na parze',
        'Skrop cytryną i posyp ziołami'
      ]
    },
    {
      id: '4',
      title: 'Koktajl proteinowy',
      description: 'Szybki i odżywczy shake idealny po treningu',
      prepTime: '5 min',
      calories: 280,
      protein: 25,
      carbs: 30,
      fat: 6,
      category: 'snack',
      difficulty: 'easy',
      image: 'shake',
      ingredients: ['odżywka białkowa', 'banan', 'szpinak', 'mleko', 'miód'],
      instructions: [
        'Wszystkie składniki wrzuć do blendera',
        'Miksuj przez 30 sekund',
        'Podawaj natychmiast'
      ]
    },
    {
      id: '5',
      title: 'Jajecznica z awokado',
      description: 'Bogate w białko śniadanie z zdrowymi tłuszczami',
      prepTime: '10 min',
      calories: 350,
      protein: 20,
      carbs: 12,
      fat: 26,
      category: 'breakfast',
      difficulty: 'easy',
      image: 'eggs',
      ingredients: ['jajka', 'awokado', 'pomidor', 'cebula', 'pieprz'],
      instructions: [
        'Rozbij jajka i smaż na maśle',
        'Pokrój awokado i pomidora',
        'Podawaj z chlebem pełnoziarnistym'
      ]
    },
    {
      id: '6',
      title: 'Makaron z tuńczykiem',
      description: 'Sycący obiad z rybą i warzywami',
      prepTime: '20 min',
      calories: 450,
      protein: 32,
      carbs: 55,
      fat: 12,
      category: 'dinner',
      difficulty: 'easy',
      image: 'pasta',
      ingredients: ['makaron pełnoziarnisty', 'tuńczyk w puszce', 'papryka', 'czosnek', 'parmezan'],
      instructions: [
        'Ugotuj makaron al dente',
        'Smaż paprykę z czosnkiem',
        'Dodaj tuńczyka i wymieszaj z makaronem'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'Wszystkie', icon: 'restaurant_menu' },
    { id: 'breakfast', name: 'Śniadania', icon: 'breakfast' },
    { id: 'lunch', name: 'Obiady', icon: 'lunch' },
    { id: 'dinner', name: 'Kolacje', icon: 'dinner' },
    { id: 'snack', name: 'Przekąski', icon: 'snack' }
  ];

  const filteredRecipes = selectedCategory === 'all' 
    ? recipes 
    : recipes.filter(recipe => recipe.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'Łatwe';
      case 'medium': return 'Średnie';
      case 'hard': return 'Trudne';
      default: return difficulty;
    }
  };

  return (
    <section className="px-6 py-20 lg:py-28 bg-gray-50 max-w-full mx-auto" id="meal-plans">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="text-primary font-bold text-xs uppercase tracking-widest bg-green-100 px-4 py-1.5 rounded-full">
          Plany Posiłków
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-6 leading-tight">
          {t("mealPlans.title")}
        </h2>
        <p className="text-gray-500 mt-4 text-lg">
          {t("mealPlans.description")}
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center px-4 py-2 rounded-full transition-all ${
              selectedCategory === category.id
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Icon name={category.icon} className="mr-2 w-4 h-4" />
            {category.name}
          </button>
        ))}
      </div>

      {/* Recipe Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-[1.02]"
            onClick={() => setSelectedRecipe(recipe)}
          >
            <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
              <Icon name="restaurant_menu" className="w-16 h-16 text-green-600" />
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(recipe.difficulty)}`}>
                  {getDifficultyText(recipe.difficulty)}
                </span>
                <span className="text-sm text-gray-500 flex items-center">
                  <Icon name="timer" className="mr-1 w-4 h-4" />
                  {recipe.prepTime}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{recipe.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-500">
                    <strong className="text-gray-700">{recipe.calories}</strong> kcal
                  </span>
                  <span className="text-gray-500">
                    <strong className="text-gray-700">{recipe.protein}g</strong> białko
                  </span>
                </div>
                <Icon name="arrow_forward" className="text-primary w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedRecipe(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{selectedRecipe.title}</h3>
                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Icon name="close" className="w-6 h-6" />
                </button>
              </div>

              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-xl mb-6 flex items-center justify-center">
                <Icon name="restaurant_menu" className="w-20 h-20 text-green-600" />
              </div>

              <p className="text-gray-600 mb-6">{selectedRecipe.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{selectedRecipe.calories}</div>
                  <div className="text-sm text-gray-500">Kalorie</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{selectedRecipe.protein}g</div>
                  <div className="text-sm text-gray-500">Białko</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{selectedRecipe.carbs}g</div>
                  <div className="text-sm text-gray-500">Węglowodany</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{selectedRecipe.fat}g</div>
                  <div className="text-sm text-gray-500">Tłuszcz</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Składniki:</h4>
                <ul className="space-y-2">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Icon name="check_circle" className="mr-2 w-4 h-4 text-green-500" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Instrukcje:</h4>
                <ol className="space-y-3">
                  {selectedRecipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex text-gray-600">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                        {index + 1}
                      </span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
