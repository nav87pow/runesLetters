import "./styles.css";
import React, { useState } from "react";
import aries from "./assets/aries.png";
import cancer from "./assets/cancer.png";
import gemini from "./assets/gemini.png";
import taurus from "./assets/taurus.png";
import virgo from "./assets/virgo.png";
import leo from "./assets/leo.png";
import scorpio from "./assets/scorpio.png";
import sagittarius from "./assets/sagittarius.png";
import pisces from "./assets/pisces.png";
import libra from "./assets/libra.png";
import aquarius from "./assets/aquarius.png";
import capricorn from "./assets/capricorn.png";

const info = [
  {
    name: "fehu",
    letter: "ᚠ",
    meaning: "possession, nourishment, cattle",
    magiclPowers: ["wealth","comfort"],
    astrologicalSymbol: "aries",
    imgSrc: aries,
    interpretiveMeaning:
      "Fehu is the rune of satisfaction. it signifies a fulfilled desire. Fehu aska the questioner to look deeply at the meaning of profit and gain in her life. Does the questioner have what he or she wants ? Does he or she wants what they have ? Is he or she ruled by their desires? It is possible that the questioner's desires are leading him or her astray and causing powerlessness.",
    eight: "freya's eight"
  },
  {
    name: "uruz",
    letter: "ᚢ",
    meaning: "strength, man/womanhood, wildox",
    magiclPowers: ["strength"," healing"],
    astrologicalSymbol: "taurus",
    imgSrc: taurus,
    interpretiveMeaning:
      "Uruz represents ending and new beginnings. This rune aligns with the pagan celebrationof Samhain, which attunes Witches to the cycles of death and rebirth. Uruz asks the questioner to remain open to the new beginnings even in the face of what appears to be an ending. Ask the questioner to redefine endings. Is there really an end to things? How might the questioner be struggling against a transition to something new, not necessarily preferred or known? Have the questioner talk about what doors may be opening in her or his life--either wanted or not. Ttansition appears to be necessary at this time.",
    eight: "freya's eight"
  },
  {
    name: "ansuz",
    letter: "ᚨ",
    meaning: "signals, messenger, loki(deity)",
    magiclPowers: ["wisdom"," communication"],
    astrologicalSymbol: "cancer",
    imgSrc: cancer,
    interpretiveMeaning:
      "Ansuz is the rune of receiving. Now in the time for the questioner to pay attention to intuition. The gods are sending mesages and now is the time for the questioner to pay attention and receive them. Messages from the divine are all around the questioner, if only he were to look and listen.",
    eight: "freya's eight"
  },
  {
    name: "thurisaz",
    letter: "ᚦ",
    meaning: "gateway, non-action, thor(deity)",
    magiclPowers: ["open locked doors "," stops enemies"],
    astrologicalSymbol: "gemini ",
    imgSrc: gemini,
    interpretiveMeaning:
      "Thurisaz is the rune of non-action; it is called the `gateway`. In eastern traditions the concept of the `gateless gateway`refers to the process of passing the barriers of your on maind. Usually this means your conditioning, your backgrouind, your cultural influences. To pass through this gate, the questioner must take a position that appears to be `non-action`. In magical work, nonaction means action turned inward. The questioner's eye of attention must turn toward him or herself to discover the gates that keep them locked into the current situation. The questioner may feel compelled to take physical action in the current situation, but now is the time for the questioner move inward. ",
    eight: "freya's eight"
  },
  {
    name: "raido",
    letter: "ᚱ",
    meaning: "journey, communication, union/reunion",
    magiclPowers: ["protection in travel "],
    astrologicalSymbol: "leo ",
    imgSrc: leo,
    interpretiveMeaning:
      "Radio is the rune of 'powerful action', It reminds the questioner that the old magicl axiom of 'As above, so below' is at work now. What is the powerful action to take in the current situation? This is a matter that only the questioner will know. The questioner is reminded to put effort into whatever wil become fruitdul making change where it is possible. Do not waste effort on that which cannot be changed. Do not waste good seed on unfertile land.",
    eight: "freya's eight"
  },
  {
    name: "gebo",
    letter: "ᚷ",
    meaning: "partnership, gift",
    magiclPowers: ["for relationships"],
    astrologicalSymbol: "libra ",
    imgSrc: libra,
    interpretiveMeaning:
      "Gebo is the rune of true partnership. The rune asks the questioner to recogniz where partnership would be of value in his current situation. Partnership does not mean reliance or dependence on onother person. The questioner finds empowerment through cooperative, united action. ",
    eight: "freya's eight"
  },
  {
    name: "kano",
    letter: "ᚲ",
    meaning: "opening, fire, torch",
    magiclPowers: ["heals wounds"],
    astrologicalSymbol: "virgo ",
    imgSrc: virgo,
    interpretiveMeaning:
      "Kano is the rune of seriousness and of clear minded intention. Kano is intention fueled by the energy of fire - the fire of conscious attention. Thae questioner is asked to deatch emotionally from the issue at hand in order to become clear minded. He should pay close attention to his surroundings and to every detail of his life. From attentive analysis of the situation, the questioner can determine the most practical solution.",
    eight: "freya's eight"
  },
  {
    name: "wunjo",
    letter: "ᚹ",
    meaning: "joy, light",
    magiclPowers: ["joy","happiness"],
    astrologicalSymbol: "scorpio ",
    imgSrc: scorpio,
    interpretiveMeaning:
      "Wunjo represents joy. The questioner is asked to prob deeply into the roots of joy. From where does it come? Where does it go? What seems to control the comings and goings of joy? If he or she looks deeply enough, they can see that joy is not predicated on any extenal circumstance. Joy ia a state of mind. It is mind that has found contentment with the things of everyday living. Joy is at hand for thequestioner, if only she or he opens their eyes to see it before them! Nothing is blocking joy at this time.",
    eight: "freya's eight"
  },
  {
    name: "sowelu",
    letter: "ᛋ",
    meaning: "wholeness, life, sun-energy",
    magiclPowers: ["solar magic","drows on the power of the sun"],
    astrologicalSymbol: "sagittarius ",
    imgSrc: sagittarius,
    interpretiveMeaning:
      "Sowelu is the rune of wholeness. In the traditional Wiccan lunar prayer called 'The Charge Of the Gdddess', it states that '-the goddes - is from the beginning and she is that which is attained at the end of desire.' In other words, she is all encompassing. The rune is telling ypu that what you seek is really a part of what you already are, in your essence. It is time to stop looking outsdie of yourself for fulfillment it is right here now. The questioner should know that only he or she an create wholeness in their life. They know what parts are missing and how to fill in the gap ",
    eight: "hagal's eight"
  },
  {
    name: "eihwaz",
    letter: "ᛇ",
    meaning: "movement, progress, horse",
    magiclPowers: ["love","lust"],
    astrologicalSymbol: "pisces ",
    imgSrc: pisces,
    interpretiveMeaning:
      "Eihwaz reminds us to think before we act. Karma is more then a fancy word. It means that everything we do has repercussions. We are all linked together; as Chief Seattle said 'Man did not weave the web of life, but is merely a strand in it. whatever he does to the web, he does to himself.' The questioner should keep in mind that whatever action he takes will come back to him eventually. Is action really necessary right now? It whould be wise for him to examine his desire for action and contemplate the possible consequences. ",
    eight: "hagal's eight"
  },
  {
    name: "hagalaz",
    letter: "ᚻ",
    meaning: "disruptive natural forces, hail, sleet",
    magiclPowers: ["reverses spells"],
    astrologicalSymbol: "sagittarius",
    imgSrc: sagittarius,
    interpretiveMeaning:
      "Hagalaz is the rune of freedom. Hagalaz asks the questioner to break free from existing patterns, for this is exactly what keeps the situation at hand from geowth. Instead of viewing his or her actions to make vhange as perfunctory, they might view them as necessary to break through to the world of spirit. Spirit needs to infuse the situation at hand and the questioner's actions will guide spirit into the right direction",
    eight: "hagal's eight"
  },
  {
    name: "algiz",
    letter: "ᛉ",
    meaning: "elk, protection, defense",
    magiclPowers: ["charms animal spirits"],
    astrologicalSymbol: "copricorn",
    imgSrc: gemini,
    interpretiveMeaning:
      "Algiz asks the questioner to examine their emotional life thoroughly. Are emotions influencing the situation right now? Instead of trying to hide, it is best if they standstill and bravely face their internal turmoil. That is not to say that they should act on what it is they face within themselves. Instead of visiting the internal drama without getting caught upin it. Remember that timing is everything. The questioner should try not to allow feelings to influence appropriate timing.",
    eight: "hagal's eight"
  },
  {
    name: "jera",
    letter: "ᛃ",
    meaning: "harvest, year",
    magiclPowers: ["brings desires through a natural cycle"],
    astrologicalSymbol: "pisces",
    imgSrc: pisces,
    interpretiveMeaning:
      "Jera has arrived on the sceneas a harbinger of good news. Jera lets the questionerknow that the fruits of his labor are at hand. However, it is imprtantfor tyhe questioner to remain patient and to wait for the proper season in order to reap his harvest. Cultivate the situation carefully and watch for digns of full ripening",
    eight: "hagal's eight"
  },
  {
    name: "perth",
    letter: "ᛈ",
    meaning: "secret, initiation",
    magiclPowers: ["reveal secrets","keeps secrets"],
    astrologicalSymbol: "aquarius",
    imgSrc: aquarius,
    interpretiveMeaning:
      "Perth is the rune of secrets, hidden or spiritual forces at play in the circumstances of the quetioner's life. It is best if guidance is sought from the realm of spirit. Now is the time to look for a sign. Also, the questioner's current situation is initiatory. Karma lifetimes unknown to the questioner. The outcome may shock or displease in some way, but it will inevitably bring about the greater goodand heighest learning. ",
    eight: "hagal's eight"
  },
  {
    name: "nauthiz",
    letter: "ᚾ",
    meaning: "need, constraint",
    magiclPowers: ["transforms troubles","lightens the heart"],
    astrologicalSymbol: "capricorn",
    imgSrc: capricorn,
    interpretiveMeaning:
      "Nauthiz is the rune of constraint. The rune asks the questioner to examine his current restrictions. Are his limits, real? From where have these constraints come? What is his participation in the limitions he faces? The universe asks that the questioner deeply contemplate those aspects of the self that appear to bind him. He should not look outward to the situation at hand, but inward to his own limitations and shadows as he responds to life.",
    eight: "hagal's eight"
  },
  {
    name: "isa",
    letter: "​ᛁ",
    meaning: "ice, freezing, standstill",
    magiclPowers: ["changes the tides","reverses the current situation"],
    astrologicalSymbol: "aquarius",
    imgSrc: aquarius,
    interpretiveMeaning:
      "Isa is the rune of winter and of gestation. When Isa is selected, the energy of the questioner's life (or current situation) is frozen; action may not be likly or feasible now. Or, movement in the situation may simply not be visinle at this time. The questioner should view the current time as a period of rest; he or she should take the example of the bear who hibernates in winter. The questioner should be patient; all seasons turn and winter melts to spring. ",
    eight: "hagal's eight"
  },
  {
    name: "dagaz",
    letter: "​ᛞ",
    meaning: "day, light, breakthrough",
    magiclPowers: ["breakthroughs","insight"],
    astrologicalSymbol: "taurus",
    imgSrc: taurus,
    interpretiveMeaning:
      "Dagaz is the rune that denote both awakening and breakthrough. The rune signifies that the questioner has arrived at a life altering realization about the situation at hand. Whether or notone chooses to act on this realization is another matter. Change is difficult. However, once light has been cast on the situation and he can clearly see what is before one, it is senseless to turn away from such knowledge. Therefore insight is not always pleasant, but it should inform action.",
    eight: "tyr's eight"
  },
  {
    name: "inguz",
    letter: "ᛟ",
    meaning: "hero, fertility",
    magiclPowers: ["fertility"],
    astrologicalSymbol: "gimini",
    imgSrc: gemini,
    interpretiveMeaning:
      "Inguz is the symbol for new beginnigs. It suggests that the questioner should alow the intuitvie process to guide him. Through the intuitive process, he or she can align theur personal will with the universal flow of nature. It may mark the beginning of some new path, a new way of thinking, of feeling or of approaching life. Once he or she clears away the old, restructive patterns of his or her life, newness can more easily emerge.",
    eight: "tyr's eight"
  },
  {
    name: "laguz",
    letter: "ᛚ",
    meaning: "water, sea",
    magiclPowers: ["commands the seas"],
    astrologicalSymbol: "cancer",
    imgSrc: cancer,
    interpretiveMeaning:
      "Laguz is a rune that aligns with the elment of water. Laguz appears in a reading to let the questioner know that there are powerful and unseen flows of energy at work in his current situation. He needs to learn not to personalize the usual movements of life, and the comings and goings of people. In the matter at hand, he is perhaps only playing a part in much bigger workings. This rune also signifies a time for cleansing the spirit through reevalution and deep meditation.",
    eight: "tyr's eight"
  },
  {
    name: "mannaz",
    letter: "ᛗ",
    meaning: "man, human race, self",
    magiclPowers: ["adaptaion"],
    astrologicalSymbol: "leo",
    imgSrc: leo,
    interpretiveMeaning:
      "Mannaz represents the self. Interestingly, the element of Mannaz ( as with Laguz ) is water. The rune suggests that the questioner will function best by learning to be adaptuve and fluid ( like water ) in his current situation. Mannaz proposes the question, 'who are you?' Are you what other people say you are? Are you what you say about yourself? What makes you a self in the first place? Probing these mysteries will deepen the questioner's wisdom and ability to face her or his life circumstances.",
    eight: "tyr's eight"
  },
  {
    name: "teiwaz",
    letter: "ᛏ",
    meaning: "harvest, year",
    magiclPowers: ["bring courage to the heart"],
    astrologicalSymbol: "scorpio",
    imgSrc: scorpio,
    interpretiveMeaning:
      "Teiwaz is the rune of the spiritual warrior, or perhaps it is like certain aspects of the crone or sage. This rune represents someone who is able to cut away the dross, the excess, in their life without regard for any sentimental attachment. Tiewaz suggests that the questioner cut loss in tow ways. First it asks him or her to cut loss from whatever may be holding them back at this time. It also asks them to cut loose from anything to wich they may be clinging. Now in the time to releas their grip on the situation and allow the natural outcome to emerge. The questioner is asked to bear in mind the principles of cause and effect. Natural consequences follow actions that may either benefit them or not.",
    eight: "tyr's eight"
  },
  {
    name: "ehwaz",
    letter: "ᛖ",
    meaning: "horse, course of the sun, movment",
    magiclPowers: ["creates movment in your current circumstances"],
    astrologicalSymbol: "virgo",
    imgSrc: virgo,
    interpretiveMeaning:
      "The rune Ehwaz symbolizes a horse, and it is the rune of movment and transition. If this rune trots your way, it suggests that the questioner should prepare for transition or change in the current situation. All things change and develop over time; nothing remains static. The questioner may mistakenly grasp at a moment, but as soon as he or she belives the moment is caught, it has gone. No matter the current status of her or his life, the questioner should know that 'this too shall pass'.",
    eight: "tyr's eight"
  },
  {
    name: "berkana",
    letter: "ᛒ",
    meaning: "birch tree, growth",
    magiclPowers: ["new beginnings"],
    astrologicalSymbol: "libra",
    imgSrc: libra,
    interpretiveMeaning:
      "Berkana is the symbol of the birch tree, of growth and ripening. The questionershould focus attention on what it is he or she has iin life. He or she should try not to focus in on what is missing or what has been lost. This is a rune of hope; the seeds that were planted are already beginning to root.",
    eight: "tyr's eight"
  },
  {
    name: "othila",
    letter: "ᛟ",
    meaning: "home, possessions, retreat",
    magiclPowers: ["peace of mind"],
    astrologicalSymbol: "aries",
    imgSrc: aries,
    interpretiveMeaning:
      "This is the rune of separation. When Othila appears in the reading, it does so to remind the questioner to recognaize the appropriateness of endings. All things must end, so says Othila. And when this rune appears, the questioner should expect an end to the current situation. It may also mean that you learning how to grapple with closure in the situation. It asks the questioner to step asideso that the natural processes already set in motion can come to completion.",
    eight: "tyr's eight"
  }
];

const App = () => {
  const [currentRune, setCurrentRune] = useState(0);

  const handelNextClick = () => {
    if (currentRune === info.length - 1) {
      setCurrentRune(0);
    } else {
      setCurrentRune((currentRune) => currentRune + 1);
    }
  };
  const handelPrevClick = () => {
    const length = info.length - 1;
    if (currentRune === 0) {
      setCurrentRune(length);
    } else {
      setCurrentRune((currentRune) => currentRune - 1);
    }
  };
  const handelRandomClick = () => {
    const length = info.length - 1;

    setCurrentRune((currentRune) => Math.ceil(Math.random() * length));
  };
  return (
    <div className="App">
      <main>
      <nav className="navLetter">
  {info.map((item, index) => (
    <button
      key={index}
      className={`letterNav ${index === currentRune ? "selected" : ""}`}
      onClick={() => setCurrentRune(index)}
    >
      {item.letter}
    </button>
  ))}
</nav>

        <nav>
          <button onClick={handelPrevClick}>≺</button>
          <button onClick={handelRandomClick}> ↭try ur luck↭ </button>
          <button onClick={handelNextClick}>≻</button>
        </nav>
        <h1>{info[currentRune].letter}</h1>

        <header>
          <h6>{info[currentRune].eight}</h6>
          <div className="title">
            <h2>{info[currentRune].name}</h2>
            <div className="astoTag">
              <img alt="" src={info[currentRune].imgSrc} />
              <h5>{info[currentRune].astrologicalSymbol}</h5>
            </div>
          </div>
        </header>
        <div className="tagPower">
        {info[currentRune].magiclPowers.map((tag, index) => (
    <h4 key={index}>{tag}</h4>
  ))}
        </div>
        <h3>{info[currentRune].meaning}</h3>

        <p>{info[currentRune].interpretiveMeaning}</p>
      </main>
    </div>
  );
};
export default App;
