import { render, screen } from '@testing-library/svelte';
import App from './App.svelte';

// Routify の $url ストアをモックする
// App.svelte内で $url が参照されているため、テスト実行時にエラーになるのを防ぐ
vi.mock('@roxi/routify', async (importOriginal) => {
  const actual = await importOriginal() as Record<string, unknown>;
  const MockRouter = (await import('./MockRouter.svelte')).default;
  return {
    ...actual, // 他の機能はそのまま利用
    url: {
      subscribe: vi.fn((fn: (value: string) => void) => {
        fn('/'); // 初期値を設定
        return () => {}; // unsubscribe 関数
      }),
    },
    // App.svelte で <Router {routes} /> が使われている場合、
    // routes が未定義であるというエラーを回避するためにモックが必要
    // ただし、実際に Router コンポーネントがどのように使われているかによって調整が必要
    Router: MockRouter, // Use the dynamically imported mock Svelte component
    // Mock for the $page store from Routify
    page: vi.fn(() => ({
      subscribe: vi.fn((run: (value: Record<string, unknown>) => void) => {
        // Provides minimal page object structure needed for App.svelte
        run({
          component: { default: {} }, // Mocked page component
          params: {},                 // Mocked route params
          // Add other properties like 'path', 'meta' if App.svelte depends on them
        });
        return () => {}; // Unsubscribe function
      })
    })),
  };
});


describe('App.svelte', () => {
  it('renders without crashing', () => {
    // App.svelte をレンダリング
    render(App);
    // 何か特定のテキストや要素が表示されていることを確認するアサーションを追加できます
    // 例: expect(screen.getByText('Welcome')).toBeInTheDocument();
    // ここではまず、エラーなくレンダリングされることだけを確認します。
  });
});
