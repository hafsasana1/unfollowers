import { InstagramUser, FollowerStats, AnalysisResults, BlogArticle, FAQItem } from './types';

export const mockFollowerStats: FollowerStats = {
  totalFollowers: 1247,
  following: 891,
  unfollowers: 23,
  mutualFollowers: 1224,
  newFollowers: 12,
  recentUnfollowers: 3,
};

export const mockUnfollowers: InstagramUser[] = [
  {
    username: '@fitness_guru_alex',
    name: 'Alex Rodriguez',
    profilePicture: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
  },
  {
    username: '@tech_insights_mike',
    name: 'Mike Johnson',
    profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
  },
  {
    username: '@wanderlust_sarah',
    name: 'Sarah Chen',
    profilePicture: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
  },
];

export const mockMutualFollowers: InstagramUser[] = [
  {
    username: '@foodie_emma',
    name: 'Emma Wilson',
    profilePicture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
  },
  {
    username: '@artist_david_creates',
    name: 'David Martinez',
    profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
  },
  {
    username: '@musician_jake',
    name: 'Jake Thompson',
    profilePicture: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
  },
];

export const mockAnalysisResults: AnalysisResults = {
  stats: mockFollowerStats,
  unfollowersList: mockUnfollowers,
  mutualFollowersList: mockMutualFollowers,
  newFollowersList: [],
  analysisDate: new Date().toISOString(),
};

export const mockBlogArticles: BlogArticle[] = [
  {
    id: '1',
    title: 'How to See Who Unfollowed You on Instagram',
    excerpt: 'Complete step-by-step guide to track Instagram unfollowers safely and securely without compromising your account.',
    publishDate: '2025-08-18',
    category: 'Instagram Guide',
    imageUrl: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    slug: 'how-to-see-who-unfollowed-you',
  },
  {
    id: '2',
    title: 'Who Doesn\'t Follow Me Back on Instagram',
    excerpt: 'Strategic guide to identify and manage Instagram followers who don\'t follow you back for better engagement.',
    publishDate: '2025-08-17',
    category: 'Follower Management',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    slug: 'who-doesnt-follow-back',
  },
  {
    id: '3',
    title: 'Instagram: Who Doesn\'t Follow Me Back',
    excerpt: 'Comprehensive tool-focused guide to find Instagram users who don\'t follow you back with safety tips.',
    publishDate: '2025-08-16',
    category: 'Instagram Tools',
    imageUrl: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    slug: 'instagram-who-doesnt-follow-me-back',
  },
  {
    id: '4',
    title: 'How to Check Instagram Unfollowers',
    excerpt: 'Complete safety guide with troubleshooting tips to check Instagram unfollowers without risking your account.',
    publishDate: '2025-08-15',
    category: 'Safety Guide',
    imageUrl: '/how-to-check-instagram-unfollowers.png?v=1',
    slug: 'how-to-check-instagram-unfollowers',
  },
  {
    id: '5',
    title: 'Does Instagram Auto Unfollow People? Complete Guide to Instagram Unfollowing',
    excerpt: 'Learn about Instagram auto unfollow features, automatic follow/unfollow tools, and why Instagram might randomly unfollow accounts.',
    publishDate: '2025-08-19',
    category: 'Instagram Guide',
    imageUrl: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    slug: 'instagram-auto-unfollow-explained',
  },
];

export const mockFAQs: FAQItem[] = [
  {
    id: '1',
    question: 'How do I see who unfollowed me on Instagram?',
    answer: 'To see who unfollowed you on Instagram, request your data from Instagram (Settings → Privacy and Security → Download Your Information), download the ZIP file when ready, and upload it to our free tracker. Our tool analyzes your followers and following lists to show exactly who unfollowed you, including recent unfollowers and mutual connections.',
  },
  {
    id: '2',
    question: 'Can I track Instagram followers without login?',
    answer: 'Yes! Our Instagram tracker works completely without requiring your login credentials. You upload your Instagram data export (ZIP file) that you download directly from Instagram. This ensures your account stays secure while giving you comprehensive follower insights without sharing passwords or login information.',
  },
  {
    id: '3',
    question: 'What is the best Instagram tracker in 2025?',
    answer: 'The best Instagram tracker in 2025 is one that prioritizes your privacy and security. Our tool offers instant results, requires no login, processes data locally, and provides comprehensive analytics including unfollower detection, new follower tracking, and mutual follower analysis - all completely free.',
  },
  {
    id: '4',
    question: 'Is it safe to use Instagram unfollower trackers?',
    answer: 'Yes, our Instagram unfollower tracker is completely safe. We never ask for your password, process your data locally in your browser, and don\'t store any personal information. Your Instagram account remains secure because we only analyze the data that Instagram provides to you through their official download feature.',
  },
  {
    id: '5',
    question: 'Can Instagram block unfollower tools?',
    answer: 'Instagram cannot block our tool because it doesn\'t interact with Instagram\'s servers directly. We analyze your own data export that you download from Instagram, making it undetectable and completely safe. Instagram has no way of knowing you\'re using our tracker since it works offline with your personal data.',
  },
  {
    id: '6',
    question: 'Does this work on business accounts?',
    answer: 'Yes, our Instagram unfollowers tracker works perfectly with both personal and business accounts. Instagram\'s data export feature is available for all account types, so you can analyze followers, unfollowers, and engagement data regardless of whether you have a personal, creator, or business Instagram account.',
  },
  {
    id: '7',
    question: 'How often should I check unfollowers?',
    answer: 'For optimal insights, check your Instagram unfollowers monthly or when you notice significant follower count changes. Instagram limits data export requests to once every few days, so frequent checking isn\'t possible. Monthly tracking gives you meaningful trends without overwhelming data while maintaining account security.',
  },
  {
    id: '8',
    question: 'Can Instagram show unfollowers directly?',
    answer: 'No, Instagram doesn\'t have a built-in feature to show who unfollowed you directly. Instagram only shows your current followers list, not who stopped following you. That\'s why third-party tools like ours are necessary - we analyze your Instagram data export to identify unfollowers, new followers, and mutual connections that Instagram doesn\'t display.',
  },
];
