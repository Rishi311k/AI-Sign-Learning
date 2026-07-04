function AuthCard({ title, subtitle, children }) {
  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

      <div className="text-center mb-8">

        <h1 className="text-3xl font-bold text-blue-600">
          AI Sign Learning
        </h1>

        <h2 className="text-2xl font-semibold mt-6">
          {title}
        </h2>

        <p className="text-gray-500 mt-2">
          {subtitle}
        </p>

      </div>

      {children}

    </div>
  );
}

export default AuthCard;