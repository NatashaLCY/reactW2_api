import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
		<>
			<h1>hello</h1>
			<button type="button" className="btn btn-primary">
				確認bootstrap載入
			</button>

			<div className="d-flex flex-column justify-content-center align-items-center vh-100">
				<h1 className="mb-5">請先登入</h1>
				<form className="d-flex flex-column gap-3">
					<div className="form-floating mb-3">
						<input type="email" className="form-control" id="username" placeholder="name@example.com" />
						<label htmlFor="username">Email address</label>
					</div>
					<div className="form-floating">
						<input type="password" className="form-control" id="password" placeholder="Password" />
						<label htmlFor="password">Password</label>
					</div>
					<button className="btn btn-primary">登入</button>
				</form>
				<p className="mt-5 mb-3 text-muted">&copy; 2024~∞ - 六角學院</p>
			</div>
		</>
  );
}

export default App
