import React, { useState } from "react";

const DOG_API = "https://dog.ceo/api/breed";

function PawIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <ellipse cx="24" cy="31" rx="12" ry="10" fill="currentColor" />
      <ellipse
        cx="10"
        cy="19"
        rx="5"
        ry="7"
        transform="rotate(-24 10 19)"
        fill="currentColor"
      />
      <ellipse
        cx="21"
        cy="12"
        rx="5"
        ry="7"
        transform="rotate(-8 21 12)"
        fill="currentColor"
      />
      <ellipse
        cx="32"
        cy="13"
        rx="5"
        ry="7"
        transform="rotate(12 32 13)"
        fill="currentColor"
      />
      <ellipse
        cx="40"
        cy="21"
        rx="5"
        ry="7"
        transform="rotate(25 40 21)"
        fill="currentColor"
      />
    </svg>
  );
}

function CutePuppy() {
  return (
    <svg
      className="puppy-vector"
      viewBox="0 0 320 320"
      role="img"
      aria-label="Cute smiling golden puppy illustration"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="puppyFur" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFD18B" />
          <stop offset="1" stopColor="#E9913F" />
        </linearGradient>
        <linearGradient id="puppyEar" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#C87535" />
          <stop offset="1" stopColor="#E9A15B" />
        </linearGradient>
        <radialGradient id="puppyCheek">
          <stop offset="0" stopColor="#FFB3A0" stopOpacity=".85" />
          <stop offset="1" stopColor="#FFB3A0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="160" cy="294" rx="93" ry="12" fill="#B76D37" opacity=".13" />
      <path
        d="M91 232 Q72 253 82 286 Q88 302 112 295 L143 271Z"
        fill="url(#puppyFur)"
      />
      <path
        d="M229 232 Q248 253 238 286 Q232 302 208 295 L177 271Z"
        fill="url(#puppyFur)"
      />
      <path
        d="M101 225 Q83 249 94 286 Q100 301 129 292 L145 263Z"
        fill="#F8BD70"
      />
      <path
        d="M219 225 Q237 249 226 286 Q220 301 191 292 L175 263Z"
        fill="#F8BD70"
      />
      <path
        d="M99 111 Q58 89 55 145 Q52 194 101 220 L124 170Z"
        fill="url(#puppyEar)"
      />
      <path
        d="M221 111 Q262 89 265 145 Q268 194 219 220 L196 170Z"
        fill="url(#puppyEar)"
      />
      <path
        d="M80 133 Q69 145 81 178 Q88 194 103 201 L113 165Z"
        fill="#B96536"
        opacity=".55"
      />
      <path
        d="M240 133 Q251 145 239 178 Q232 194 217 201 L207 165Z"
        fill="#B96536"
        opacity=".55"
      />
      <path
        d="M100 243 Q80 212 91 158 Q98 88 160 76 Q222 88 229 158 Q240 212 220 243 Q198 276 160 277 Q122 276 100 243Z"
        fill="url(#puppyFur)"
      />
      <path
        d="M112 123 Q126 91 160 91 Q194 91 208 123 Q190 112 177 117 Q160 105 143 117 Q130 112 112 123Z"
        fill="#FFE0A8"
        opacity=".8"
      />
      <ellipse cx="126" cy="170" rx="17" ry="22" fill="#fff" />
      <ellipse cx="194" cy="170" rx="17" ry="22" fill="#fff" />
      <ellipse cx="129" cy="172" rx="10" ry="15" fill="#30251F" />
      <ellipse cx="191" cy="172" rx="10" ry="15" fill="#30251F" />
      <ellipse cx="132" cy="166" rx="4" ry="5" fill="#fff" />
      <ellipse cx="194" cy="166" rx="4" ry="5" fill="#fff" />
      <path
        d="M107 151 Q124 137 141 149"
        stroke="#A85D2E"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M179 149 Q196 137 213 151"
        stroke="#A85D2E"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="160" cy="211" rx="47" ry="38" fill="#FFE4B7" />
      <ellipse cx="122" cy="207" rx="20" ry="13" fill="url(#puppyCheek)" />
      <ellipse cx="198" cy="207" rx="20" ry="13" fill="url(#puppyCheek)" />
      <path
        d="M145 193 Q160 184 175 193 Q175 208 160 211 Q145 208 145 193Z"
        fill="#30251F"
      />
      <ellipse cx="155" cy="192" rx="5" ry="3" fill="#fff" opacity=".8" />
      <path
        d="M160 210 L160 222 Q147 239 132 221"
        stroke="#8E4B31"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M160 222 Q173 239 188 221"
        stroke="#8E4B31"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M143 225 Q160 219 177 225 Q176 247 160 249 Q144 247 143 225Z"
        fill="#F16F78"
      />
      <path
        d="M160 227 L160 244"
        stroke="#D94D62"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M112 260 Q123 250 139 259 L143 282 Q124 293 106 282Z"
        fill="#FFD18B"
      />
      <path
        d="M208 260 Q197 250 181 259 L177 282 Q196 293 214 282Z"
        fill="#FFD18B"
      />
      <path
        d="M117 278 Q127 283 137 278 M183 278 Q193 283 203 278"
        stroke="#D98A46"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getDogData = async (breedInput = searchText) => {
    const breed = breedInput.trim().toLowerCase();

    if (!breed) {
      setError("Enter a breed name to start your search.");
      setDogs([]);
      return;
    }

    setSearchText(breed);
    setLoading(true);
    setError("");
    setDogs([]);

    try {
      const response = await fetch(
        `${DOG_API}/${encodeURIComponent(breed)}/images/random/4`,
      );
      const result = await response.json();

      if (
        !response.ok ||
        result.status !== "success" ||
        !Array.isArray(result.message)
      ) {
        throw new Error(
          "We couldn't find that breed. Check the spelling and try again.",
        );
      }

      setDogs(result.message);
    } catch (err) {
      setDogs([]);
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please check your connection and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const downloadDogImage = async (imageUrl, index) => {
    try {
      // Fetch the image as a Blob so the browser downloads it instead of opening it.
      const response = await fetch(imageUrl);
      if (!response.ok) throw new Error("Image download failed");
      const imageBlob = await response.blob();
      const objectUrl = URL.createObjectURL(imageBlob);
      const extension = imageBlob.type.includes("png")
        ? "png"
        : imageBlob.type.includes("webp")
          ? "webp"
          : "jpg";
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = `doggle-${searchText || "dog"}-${index + 1}.${extension}`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(objectUrl);
    } catch (downloadError) {
      // Fallback: open the image directly if the remote host blocks cross-origin fetching.
      window.open(imageUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleClear = () => {
    setSearchText("");
    setDogs([]);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getDogData(searchText);
  };

  return (
    <div className="app-shell">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Doggle home">
          <span className="brand-mark">
            <PawIcon size={25} />
          </span>
          <span>
            Doggle<span className="brand-period">.</span>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a className="nav-link active" href="#home">
            Home
          </a>
          <a className="nav-link" href="#about">
            About
          </a>
        </nav>
        <a className="nav-cta" href="#search">
          Find a dog <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" /> YOUR DAILY DOSE OF CUTE
            </div>
            <h1>
              Every breed has
              <br />a <span>good side.</span>
            </h1>
            <p className="hero-description">
              Meet your next favourite floof. Search a dog breed and discover a
              few adorable faces in seconds.
            </p>
            <a href="#search" className="hero-link">
              Meet the dogs <span aria-hidden="true">↓</span>
            </a>
            <div className="hero-note">
              <PawIcon size={17} /> Four random photos, endless good vibes.
            </div>
          </div>
          <div className="hero-art" aria-label="Happy dog illustration">
            <div className="art-sun" />
            <div className="art-spark spark-one">✳</div>
            <div className="art-spark spark-two">✦</div>
            <div className="art-circle">
              <CutePuppy />
            </div>
            <div className="floating-tag tag-top">
              <span>♡</span> certified cutie
            </div>
            <div className="floating-tag tag-bottom">
              <span className="tag-paw">
                <PawIcon size={16} />
              </span>{" "}
              100% good dog
            </div>
            <span className="art-doodle doodle-left">〰</span>
            <span className="art-doodle doodle-right">✧</span>
          </div>
        </section>

        <section className="search-section" id="search">
          <div className="section-heading">
            <span className="section-kicker">THE FUN PART</span>
            <h2>Who's your type?</h2>
            <p>One breed name is all it takes.</p>
          </div>

          <form className="search-form" onSubmit={handleSubmit}>
            <span className="search-icon">
              <PawIcon size={21} />
            </span>
            <input
              aria-label="Dog breed name"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Try “husky”, “pug”, “beagle”…"
              autoComplete="off"
            />
            {searchText && (
              <button
                type="button"
                className="clear-button"
                onClick={handleClear}
              >
                Clear
              </button>
            )}
            <button className="search-button" type="submit" disabled={loading}>
              {loading ? "Searching…" : "Search dogs"}{" "}
              <span aria-hidden="true">↗</span>
            </button>
          </form>
          <p className="search-hint">
            Tip: use lowercase breed names, like{" "}
            <button type="button" onClick={() => getDogData("corgi")}>
              corgi
            </button>{" "}
            or{" "}
            <button type="button" onClick={() => getDogData("pug")}>
              pug
            </button>
            .
          </p>

          <div className="results-area" aria-live="polite">
            {loading ? (
              <div className="state-card">
                <span className="loader-paw">
                  <PawIcon size={38} />
                </span>
                <h3>Sniffing around…</h3>
                <p>Finding some very good dogs for you.</p>
              </div>
            ) : error ? (
              <div className="state-card error-state">
                <span className="state-emoji">🐾</span>
                <h3>Oops, no pups found!</h3>
                <p>{error}</p>
              </div>
            ) : dogs.length > 0 ? (
              <>
                <div className="results-title">
                  <div>
                    <span className="section-kicker">YOUR RESULTS</span>
                    <h3>Meet the {searchText} crew</h3>
                  </div>
                  <span className="result-count">
                    {dogs.length} adorable finds
                  </span>
                </div>
                <div className="dog-grid">
                  {dogs.map((dog, index) => (
                    <article className="dog-card" key={`${dog}-${index}`}>
                      <div className="dog-image-wrap">
                        <img
                          src={dog}
                          alt={`${searchText} dog ${index + 1}`}
                          loading="lazy"
                        />
                        <span className="photo-number">0{index + 1}</span>
                      </div>
                      <div className="dog-card-caption">
                        <span>{searchText}</span>
                        <span className="dog-heart" aria-label="heart">
                          ♡
                        </span>
                      </div>
                      <button
                        className="download-button"
                        type="button"
                        onClick={() => downloadDogImage(dog, index)}
                        aria-label={`Download ${searchText} dog photo ${index + 1}`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <path d="m7 10 5 5 5-5M12 15V3" />
                        </svg>
                        Download image
                      </button>
                    </article>
                  ))}
                </div>
                <button
                  className="again-button"
                  onClick={() => getDogData(searchText)}
                  type="button"
                >
                  Show me more <span>↻</span>
                </button>
              </>
            ) : (
              <div className="empty-state">
                <div className="empty-paw">
                  <PawIcon size={35} />
                </div>
                <h3>Your next best friend is one search away.</h3>
                <p>Search for a breed to fill this space with furry faces.</p>
              </div>
            )}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-icon">
            <PawIcon size={28} />
          </div>
          <div className="about-copy">
            <span className="section-kicker">A LITTLE ABOUT US</span>
            <h2>Small search. Big tail wags.</h2>
            <p>
              Doggle is a dog searcher website made for curious dog lovers. Look
              up a breed and discover random dog photos, whether you're
              researching your future companion or just need a little happiness
              in your day.
            </p>
          </div>
          <div className="about-stamp">
            <span>MADE WITH</span>
            <strong>♡</strong>
            <span>FOR DOGS</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="footer-brand" href="#home">
          <PawIcon size={18} /> Doggle.
        </a>
        <span>
          Made for the love of dogs <span className="footer-heart">♥</span>
        </span>
        <a href="https://dog.ceo/dog-api/" target="_blank" rel="noreferrer">
          Powered by Dog CEO API ↗
        </a>
      </footer>
    </div>
  );
}
