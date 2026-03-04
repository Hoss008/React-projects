import './App.css'
import BaseCard from './components/BaseCard'
import ProductCard from './components/ProductCard'
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="cardGrid">
      <BaseCard>
        <ProductCard
          imageUrl="https://plus.unsplash.com/premium_photo-1681313825348-7f2fe67e4e8f?q=80&w=2216&auto=format&fit=crop"
          title="iPhone 17"
          description="iPhone 17 with 512 GB and 12 GB of RAM"
          onAddToCart={() => console.log("Added to cart!")}
        />
      </BaseCard>

      <BaseCard>
        <UserCard
          name="Hossam Hassan"
          role="Software Engineer"
          skills={["JS", "MongoDB", "ReactJS", "DSA"]}
        />
      </BaseCard>
    </div>
  )
}

export default App