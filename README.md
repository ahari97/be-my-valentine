# Will you be my Valentine? 💕

A simple Valentine's website you can customize and host for free on GitHub Pages.

---

## Step-by-step guide (for complete beginners)

### Part 1: Open and edit the files on your computer

1. **Open the project folder**  
   On your Mac: open **Finder** → go to your home folder (your name in the sidebar) → find the folder **valentines-website**.  
   Or in Terminal: `open /Users/aniruddhhari/valentines-website`

2. **What each file does**
   - **index.html** — The main page: headings, text, and buttons.
   - **style.css** — Colors, fonts, spacing, and how things look.
   - **script.js** — What happens when someone clicks "Yes" or "No".

3. **Edit the text to make it personal**
   - **Open `index.html`** in any text editor (Cursor, VS Code, TextEdit, etc.).
   - Change the title in the `<title>` tag at the top.
   - Change the heading: replace "Will you be my Valentine?" with your own line if you want.
   - In the **message** section (inside `<div id="message">`), replace the paragraphs with your own words for your girlfriend. Save the file when done.
   - **Open `style.css`** if you want to change colors (e.g. search for `#c71585` and replace with another hex color).
   - **Open `script.js`** only if you want to change what happens on button clicks; for a first time, you can leave it as is.

---

### Part 2: Test the website on your computer (before putting it online)

1. **Option A — Double-click (simplest)**  
   In Finder, double-click **index.html**. It will open in your default browser.  
   - Click "Yes! 💕" — you should see your message.  
   - Click "No 😢" — you should see the "try the other one" text.

2. **Option B — From Terminal (good habit)**  
   - Open **Terminal** (search "Terminal" in Spotlight).
   - Run:
     ```bash
     cd /Users/aniruddhhari/valentines-website
     python3 -m http.server 8000
     ```
   - Open your browser and go to: **http://localhost:8000**
   - To stop the server: press **Ctrl + C** in the Terminal.

If everything looks and works the way you want, you’re ready to put it on GitHub.

---

### Part 3: Put the site on GitHub and turn on GitHub Pages

1. **Create a GitHub account** (if you don’t have one)  
   Go to [github.com](https://github.com) and sign up.

2. **Create a new repository**
   - Click the **+** in the top-right → **New repository**.
   - **Repository name:** use your GitHub username + `.github.io`  
     Example: if your username is **aniruddhhari**, name it: **aniruddhhari.github.io**  
     (That special name makes your site appear at `https://aniruddhhari.github.io`)
   - Leave "Add a README" **unchecked**.
   - Click **Create repository**.

3. **Upload your files**
   - On the new repo page, click **"uploading an existing file"** (or drag and drop).
   - Drag these three files into the browser (or choose them):
     - **index.html**
     - **style.css**
     - **script.js**
   - Optionally add **README.md** (this file).
   - Scroll down, add a short commit message like "Add Valentine site", and click **Commit changes**.

4. **Turn on GitHub Pages**
   - In the repo, click **Settings** (top menu).
   - In the left sidebar, click **Pages** (under "Code and automation").
   - Under **Source**, choose **Deploy from a branch**.
   - Under **Branch**, select **main** and folder **/ (root)**.
   - Click **Save**.
   - Wait 1–2 minutes. Refresh the Pages settings; it will show something like:  
     **Your site is live at https://yourusername.github.io/**

5. **Open your site**  
   Visit **https://yourusername.github.io** (use your real username). You should see your Valentine page.

---

### Part 4: Updating the site later

- Go to your repo on GitHub.
- Click the file you want to change (e.g. **index.html**).
- Click the **pencil icon** (Edit).
- Edit the text, then click **Commit changes** at the bottom.  
  The site will update in a minute or two; refresh the browser to see changes.

---

## Quick reference: what to open where

| Goal              | File to open   | Where to look / edit                          |
|-------------------|----------------|-----------------------------------------------|
| Change main text  | index.html     | `<h1>`, `<p>` inside the card                 |
| Change your message | index.html   | Inside `<div id="message">`                    |
| Change colors     | style.css      | `#c71585`, `background:`, `color:`            |
| Change button behavior | script.js | Inside `addEventListener("click", ...)`       |
| Test locally     | —              | Double-click index.html or use `python3 -m http.server` |
| Host online      | —              | GitHub repo named username.github.io + Settings → Pages |

---

Have fun, and happy Valentine’s! 💕
