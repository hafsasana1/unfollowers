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
    title: 'How to See Pending Follow Requests on Instagram',
    excerpt: 'Find out how to see your Pending Follow Requests on Instagram and know who hasn\'t accepted your follow requests yet.',
    publishDate: '2025-08-03',
    category: 'Instagram',
    imageUrl: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    slug: 'how-to-see-pending-follow-requests-on-instagram',
  },
  {
    id: '2',
    title: 'Best apps to download Instagram videos in HD',
    excerpt: 'Discover the 3 best apps to download Instagram videos for free and in high-quality',
    publishDate: '2024-10-02',
    category: 'Instagram',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    slug: 'best-apps-to-download-instagram-videos-in-hd',
  },
  {
    id: '3',
    title: 'Benefits of an Instagram Business Account',
    excerpt: 'Learn why you should switch to an Instagram business account and how to set it up for success.',
    publishDate: '2024-06-15',
    category: 'Instagram',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    slug: 'benefits-of-an-instagram-business-account',
  },
];

export const mockFAQs: FAQItem[] = [
  {
    id: '1',
    question: 'How can I track Unfollowers on Instagram?',
    answer: 'To track unfollowers on Instagram, request your data from Instagram (Settings → Privacy and Security → Download Your Information), download the ZIP file when ready, and upload it to our secure tool. We\'ll analyze your followers and following lists to show you exactly who doesn\'t follow you back.',
  },
  {
    id: '2',
    question: 'Is UnfollowersTracker secure to use?',
    answer: 'Yes, our tool is completely secure. We don\'t require your Instagram login credentials, and your data is processed locally in your browser. We never store your personal information or Instagram data on our servers, ensuring your privacy and account security at all times.',
  },
  {
    id: '3',
    question: 'Do I need to provide my Instagram password?',
    answer: 'No, you never need to provide your Instagram password or login credentials. Our tool works by analyzing the data that Instagram provides to you directly through their official data download feature. This ensures your account remains completely secure and private.',
  },
  {
    id: '4',
    question: 'Can I use UnfollowersTracker for multiple Instagram accounts?',
    answer: 'Yes, you can analyze multiple Instagram accounts. Simply request and download the data for each account separately from Instagram, then upload each ZIP file to our tool individually. Each analysis is independent and secure.',
  },
  {
    id: '5',
    question: 'Is there a cost to find out who has unfollowed me?',
    answer: 'No, our Instagram unfollowers tracker is completely free to use. There are no hidden costs, premium features, or subscription fees. All features are available at no charge, and we\'re committed to keeping it free forever.',
  },
];
