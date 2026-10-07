"use client";

import { neueHaas, plexMono } from "./fonts";
import { useState } from "react";
import "./index.css";



export default function Home() {
	const [message, setMessage] = useState("");

	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		const linkInput = document.querySelector("#link-input") as HTMLInputElement;

		const link_value = linkInput.value;
		if (link_value === "") {
			setMessage("Fill the input first.");
			return null;
		}
		const json_payload = JSON.stringify({
			link: link_value
		});

		fetch("/api/v1/link/generate", {
			method: "POST",
			body: json_payload
		})
			.then((res) => { return res.json() })
			.then((data) => {
				if (data.success) {
					setMessage(data.url);
				} else {
					setMessage(data.error);
				}
			});
		linkInput.value = "";
	}

	return (
		<div className="app-page text-gray-100">
			<div className="hero">
				<h1 className={`${neueHaas.className} home-title`}>短い</h1>
				<p className={`${plexMono.className} home-subtitle`}>Mijikai - The Shortest Path Is Always The Straight One</p>
			</div>
			<br />
			<div className="shortener-form border border-solid rounded-none border-gray-700 p-3">
				<form>
					<input type="text" required placeholder="URL Here..." name="link" id="link-input" className={`p-1 border border-solid rounded-none border-gray-400 ${plexMono.className}`} /><br /> <br />
					<button type="submit" id="link-submit" className={`border border-solid border-white p-1 rounded-sm ${plexMono.className}`} onClick={(e) => handleClick(e)}>Submit</button>
				</form>
				<br />
				<div className={`status-message ${plexMono.className}`}>{message.startsWith("http") ? (
					<a
						href={message}
						target="_blank"
						rel="noopener noreferrer"
						className="underline"
					>
						{message}
					</a>
				) : (
					message
				)}</div>
			</div>
		</div>
	);
}
