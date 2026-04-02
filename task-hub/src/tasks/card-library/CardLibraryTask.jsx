import styles from "./styles.module.css";

function BaseCard({ children }) {
  return <div className={styles.card}>{children}</div>;
}

function ProductCard({
  title = "Untitled Product",
  price = 0,
  isAvailable = false,
}) {
  return (
    <BaseCard>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.price}>${price}</p>
      <span
        className={`${styles.badge} ${
          isAvailable ? styles.available : styles.unavailable
        }`}
      >
        {isAvailable ? "Available" : "Unavailable"}
      </span>
    </BaseCard>
  );
}

function UserCard({ name, role, bio }) {
  return (
    <BaseCard>
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.text}>{role}</p>
      <p className={styles.meta}>{bio}</p>
    </BaseCard>
  );
}

function BlogCard({ title, summary, date }) {
  return (
    <BaseCard>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{summary}</p>
      <p className={styles.meta}>{date}</p>
    </BaseCard>
  );
}

function CardLibraryTask() {
  return (
    <div className={styles.libraryLayout}>
      <ProductCard title="MacBook Air M4" price={99} isAvailable={true} />
      <ProductCard title="MacBook Air M5" price={150} isAvailable={false} />
      <UserCard
        name="Hossam Hassan"
        role="Developer"
        bio="React JS Developer Will Join The FAANG Soon ISA"
      />
      <BlogCard
        title="How I Became a React Developer"
        summary="My journey from basics to building real-world applications with React."
        date="March 2026"
      />
    </div>
  );
}

export default CardLibraryTask;
