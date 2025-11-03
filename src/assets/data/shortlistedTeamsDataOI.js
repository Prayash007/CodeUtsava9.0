const shortlistedTeams = [
  {
    "name": "ping_wing",
    "leader": "HEMANG BHAGAT",
    "member1": "HEMANG BHAGAT",
    "member2": "SANIYA FATIMA",
    "member3": "SHREYASH SRIVAST",
    "member4": "SHREYAS HEGDE",
    "college": "Dayananda Sagar College of Engineering, BANGALORE"
  },
  {
    "name": "Meta Cognition",
    "leader": "Sujal Kumar Agarwal",
    "member1": "SUJAL AGARWAL",
    "member2": "BIBHUPRASANNA",
    "member3": "KUNAL KUSHWAHA",
    "member4": "HRUSHIKESH",
    "college": "NIT Rourkela"
  },
  {
    "name": "Wifi & Chill",
    "leader": "",
    "member1": "Vedant Dubey",
    "member2": "Prince Kumar",
    "member3": "Devesh Agrawal",
    "member4": "Hetharth Sachdeva",
    "college": "NIT Raipur"
  },
  {
    "name": "CozyCoders",
    "leader": "Prakhar Dwivedi",
    "member1": "PRAKHAR DWIVEDI",
    "member2": "KRISH RATHI",
    "member3": "VANSH TAMBI",
    "member4": "",
    "college": "IIIT Bhopal"
  },
  {
    "name": "CodeCortex",
    "leader": "Shweta Srivastava",
    "member1": "DHRUV TALWAR",
    "member2": "SAUMYA SACHAN",
    "member3": "SHWETA SRIVASTAVA",
    "member4": "ATHARVA DUBEY",
    "college": "Pranveer Singh Institute of Technology"
  },
  {
    "name": "silent innovators",
    "leader": "Abhishek Mishra",
    "member1": "SANGINI TIWARI",
    "member2": "SHIV PRAKASH",
    "member3": "AAYUSH DUBEY",
    "member4": "ABHISHEK MISHRA",
    "college": "United College of Engineering and Research"
  },
  {
    "name": "Always Last",
    "leader": "Ujjwal Kumar Singh",
    "member1": "ADITYA KUMAR",
    "member2": "ROHIT RATNAM",
    "member3": "UJJWAL KUMAR SINGH",
    "member4": "SHIVAM MISHRA",
    "college": "NIT JSR"
  },
  {
    "name": "The Semicolons",
    "leader": "Ishan Kumar Sahu",
    "member1": "Nihar Shandilya",
    "member2": "Aditi Singh",
    "member3": "Shubham Rao",
    "member4": "Ishan Kumar Sahu",
    "college": "BIT Durg"
  },
  {
    "name": "Team EchoEcho",
    "leader": "",
    "member1": "Rishabh Chandrakar",
    "member2": "Piyush Lokhande",
    "member3": "Gajendra Bhoi",
    "member4": "Prince Gupta",
    "college": "NIT Raipur"
  },
  {
    "name": "Vibe Coders",
    "leader": "",
    "member1": "Shivang Barnwal",
    "member2": "Ashwary Gupta",
    "member3": "Abhinav Mishra",
    "member4": "Sujal Ahar",
    "college": "NIT Raipur"
  },
  {
    "name": "Luminara",
    "leader": "",
    "member1": "Mayank Joshi",
    "member2": "Deepnkar Gupta",
    "member3": "Sulankita Singh",
    "member4": "SK Saha",
    "college": "NIT Raipur (Open Innovation)"
  },
  {
    "name": "Enigma",
    "leader": "",
    "member1": "Trishant Singh",
    "member2": "Utkarsh Tiwari",
    "member3": "Vibhor Shukla",
    "member4": "Gourav Deep Shahni",
    "college": "NIT Raipur"
  },
  {
    "name": "shell",
    "leader": "Harshit Verma",
    "member1": "HARSHIT VERMA",
    "member2": "RAJ NANDAN",
    "member3": "HARSH KUMAR",
    "member4": "HIMANSHU TIWARI",
    "college": "NIT Patna"
  },
  {
    "name": "Takniki Dhurandar",
    "leader": "Priyansh Gupta",
    "member1": "MARIYA KHATRI",
    "member2": "ARSHAAN HAFEEZ",
    "member3": "SANSKRITI AGRAWAL",
    "member4": "PRIYANSH GUPTA",
    "college": "BIT, Durg"
  },
  {
    "name": "ZeroDay",
    "leader": "Karan Jain",
    "member1": "DHRUTHI G P",
    "member2": "KARAN JAIN",
    "member3": "SAMARTH B C",
    "member4": "",
    "college": "Dayananda Sagar College of Engineering, BANGALORE"
  },
  {
    "name": "Kaju Katli",
    "leader": "",
    "member1": "Alisha Tripathi",
    "member2": "Priyadarshi Satyakam",
    "member3": "Darshan Kochar",
    "member4": "",
    "college": "IIIT Naya Raipur"
  },
  {
    "name": "Rail_Neer",
    "leader": "Arnav Pandey",
    "member1": "Abhi Ranjan",
    "member2": "A.Ayush Menon",
    "member3": "Arnav Pandey",
    "member4": "Udit Bhatt",
    "college": "IIIT NR"
  },
  {
    "name": "Orbit",
    "leader": "Himanshu Rathore",
    "member1": "Mohammad Owais Naeem",
    "member2": "Mayank Dindoire",
    "member3": "Himanshu Rathore",
    "member4": "",
    "college": "Sri Shankaracharya, Bhilai"
  },
  {
    "name": "CyberNomads",
    "leader": "",
    "member1": "Nitesh Kumar",
    "member2": "Yashovardhan Singh",
    "member3": "Sankalp Mittal",
    "member4": "Prasann Trivedi",
    "college": "NIT Raipur"
  },
  {
    "name": "Team Rocket",
    "leader": "",
    "member1": "Somansh Kashyap",
    "member2": "Ankit Singh",
    "member3": "Abhinav Tadiparthi",
    "member4": "Prajwal Kambale",
    "college": "NIT Raipur"
  },
  {
    "name": "Team Kalki",
    "leader": "",
    "member1": "Abhyudaya Choudhary",
    "member2": "Adarsh Pandey",
    "member3": "RAHUL SINGH",
    "member4": "Nishant Kumar",
    "college": "NIT Raipur"
  },
  {
    "name": "Chaoticgermlins",
    "leader": "",
    "member1": "Harshal Jain",
    "member2": "Mihir Mandhani",
    "member3": "Atulit Gupta",
    "member4": "Kavya Dewangan",
    "college": "NIT Raipur (Open Innovation)"
  },
  {
    "name": "Bit_Masters",
    "leader": "",
    "member1": "Vaibhavi S",
    "member2": "Rahul Sahu",
    "member3": "Shourya Sinha",
    "member4": "Ashutosh Behera",
    "college": "NIT Raipur"
  },
  {
    "name": "Trojan Force",
    "leader": "",
    "member1": "Apurv Shekhar",
    "member2": "Anirudh Pratap Singh",
    "member3": "Amit Kumar Panchayan",
    "member4": "Arshil Yusuf",
    "college": "NIT Raipur"
  },
  {
    "name": "Cypher0x",
    "leader": "",
    "member1": "Raziullah Ansari",
    "member2": "Khushbu Jain",
    "member3": "Indresh Verma",
    "member4": "Abdullah Shaikh",
    "college": "NIT Raipur"
  },
  {
    "name": "KIRMADA",
    "leader": "",
    "member1": "Srijan Agrawal",
    "member2": "Sundram Rai",
    "member3": "Raghav Mahajan",
    "member4": "Shaurya Bansal",
    "college": "NIT Raipur"
  },
  {
    "name": "Neural_Ninjas",
    "leader": "",
    "member1": "Ronanki Dinesh",
    "member2": "Omesh Janghel",
    "member3": "Ved Yamgantivar",
    "member4": "Vipul Mahilange",
    "college": "NIT Raipur"
  },
  {
    "name": "Digicraft Tech",
    "leader": "",
    "member1": "Ayush Singh",
    "member2": "Sara Singh",
    "member3": "",
    "member4": "",
    "college": "NIT JSR"
  },
  {
    "name": "HackSmith",
    "leader": "Pratyush Bhaskar",
    "member1": "RUDRAKSH MALL",
    "member2": "RAJEEV DIXIT",
    "member3": "SAHIL BHARNE",
    "member4": "PRATYUSH BHASKAR",
    "college": "MNNIT Allahabad"
  },
  {
    "name": "Code Slayers",
    "leader": "Kavya Tiwari",
    "member1": "KAVYA TIWARI",
    "member2": "RISHABH RAJ",
    "member3": "SHIVANSH SHARMA",
    "member4": "",
    "college": "TITS Bhopal"
  },
  {
    "name": "4YEO",
    "leader": "Sarthak Shrivastava",
    "member1": "Hardik Pawar",
    "member2": "Anuj Chowdhury",
    "member3": "Annepu Sagar",
    "member4": "Sarthak Shrivastava",
    "college": "Rungta, Bhilai"
  },
  {
    "name": "Nohara Family",
    "leader": "",
    "member1": "Pranjal Agrawal",
    "member2": "Akshat Pandey",
    "member3": "Tanishq Sidar",
    "member4": "Shashwat Karn",
    "college": "NIT Raipur"
  },
  {
    "name": "Team ACE",
    "leader": "",
    "member1": "Vinay Pepakayala",
    "member2": "Dharavath Rahul Nayak",
    "member3": "",
    "member4": "",
    "college": "NIT Raipur"
  },
  {
    "name": "Serenity",
    "leader": "",
    "member1": "Bhoomi Chhablani",
    "member2": "KRITIKA AGRAWAL",
    "member3": "Ayush Kumar Suryawanshi",
    "member4": "",
    "college": "NIT Raipur (Open Innovation)"
  },
  {
    "name": "neersutra",
    "leader": "Aarush Singh",
    "member1": "VANSH MEHTA",
    "member2": "AARUSH SINGH",
    "member3": "MANA SHARMA",
    "member4": "ABHIMANYU PURI G",
    "college": "Bennet University"
  },
  {
    "name": "HexaBits",
    "leader": "",
    "member1": "himanshu shakya",
    "member2": "Neeraj Kumar",
    "member3": "Shaan Alam",
    "member4": "",
    "college": "NIT Raipur"
  },
  {
    "name": "Hit-N-run",
    "leader": "",
    "member1": "Aryan Jha",
    "member2": "Krrish Agarwal",
    "member3": "Jayesh Sharma",
    "member4": "",
    "college": "NIT Raipur"
  },
  {
    "name": "Senpai Coders",
    "leader": "",
    "member1": "Shreshth Khare",
    "member2": "Amogh Srivastava",
    "member3": "",
    "member4": "",
    "college": "NIT Raipur (Open Innovation)"
  },
  {
    "name": "Human_Cyborg",
    "leader": "",
    "member1": "Sakshi Solanki",
    "member2": "Arup Paul",
    "member3": "Uddhav Pawar",
    "member4": "",
    "college": "NIT Raipur"
  },
  {
    "name": "Bramhacoders",
    "leader": "Anshuman Pati",
    "member1": "JAYANTH MIDDE",
    "member2": "ANSHUMAN PATI",
    "member3": "D RAMKISHAN",
    "member4": "",
    "college": "Dayananda Sagar College of Engineering, BANGALORE"
  },
  {
    "name": "Base2",
    "leader": "",
    "member1": "Priyanshu Kumar Pandey",
    "member2": "Shreeyash Kumar Dheemar",
    "member3": "",
    "member4": "",
    "college": "NIT Raipur"
  }
];

export default shortlistedTeams;