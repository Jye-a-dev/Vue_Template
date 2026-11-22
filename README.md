# Vue_Template (Production-Ready)

Repository template Vue 3 Single Page Application (SPA) hiện đại, được tối ưu hóa cho cả làm việc độc lập (Solo) và theo nhóm (Team). Kiến trúc phân tầng rõ ràng (Feature-Based Hybrid), quản lý biến môi trường an toàn, thiết lập sẵn Port 5000 qua .env, cùng hệ thống guardrails chất lượng code tự động.

## Tech Stack

| Thư viện / Công cụ      | Phiên bản            | Mô tả                                                                                    |
| :---------------------- | :------------------- | :--------------------------------------------------------------------------------------- |
| **Vue 3**               | `3.5.44`             | Core framework với Composition API (`<script setup lang="ts">`), type-based props/emits  |
| **Vite**                | `8.3.6`              | Next-generation frontend bundler và local dev server                                     |
| **TypeScript**          | `~6.0.3`             | Type-safety toàn diện, cấu hình path alias `@/*` không dùng `baseUrl` deprecated         |
| **Tailwind CSS**        | `4.3.5`              | Tailwind v4 với CSS-first configuration (`@import "tailwindcss";`) & `@tailwindcss/vite` |
| **@tanstack/vue-query** | `^5.108.2`           | Quản lý asynchronous server state, background revalidation & caching                     |
| **Pinia**               | `^4.1.0`             | Global client state quản lý theo Setup Store pattern                                     |
| **Vue Router**          | `^5.5.1`             | Client-side routing với lazy loading và navigation guards                                |
| **Zod**                 | `^4.6.7`             | Schema validation cho runtime env và forms                                               |
| **Axios**               | `^1.21.1`            | HTTP client kèm interceptors cấu hình sẵn và auto-inject auth token                      |
| **Lucide Vue Next**     | `^1.0.0`             | Bộ icon SVG tối ưu dành riêng cho Vue 3                                                  |
| **ESLint & Prettier**   | `^10.15.0 / ^3.10.1` | Linter Flat Config (`eslint.config.js`) & Formatter kèm Tailwind class sorting           |
| **Husky & Commitlint**  | `^9.1.7 / ^21.2.4`   | Git hooks kiểm soát Conventional Commits & Lint-staged                                   |

## Yêu cầu Hệ thống

- **Node.js**: Phiên bản `>= 22.x` (Khuyến nghị `22.x` theo file `.nvmrc`)
- **Package Manager**: `npm` (hoặc `pnpm` / `yarn`)

## Hướng dẫn Quick Start

Chỉ với 4 bước đơn giản để khởi chạy dự án:

```bash
# 1. Clone repository
git clone <repository-url> vue_template
cd vue_template

# 2. Tạo file cấu hình môi trường từ template
cp .env.example .env

# 3. Cài đặt các dependencies
npm install

# 4. Chạy môi trường phát triển (Mặc định tự động nhận Port 5000)
npm run dev
```

Mở trình duyệt tại: [http://localhost:5000](http://localhost:5000)

## Cấu hình Biến Môi trường (.env)

Dự án được cấu hình để Vite tự động đọc biến `VITE_PORT` từ file `.env` qua hàm `loadEnv` trong `vite.config.ts` mà không cần hardcode cờ `--port` trong script `package.json`.

```env
# Port chạy ứng dụng (áp dụng cho cả `npm run dev` và `npm run preview`)
VITE_PORT=5000

# Base URL của Backend API (dùng cho Axios instance)
VITE_API_BASE_URL=http://localhost:8000/api
```

**Ghi chú về bảo mật:** File `.env` và các biến thể local đã được đưa vào `.gitignore`. File `.env.example` được lưu trên Git làm mẫu tham chiếu cho toàn team. Toàn bộ biến môi trường được validate runtime tại `src/config/env.ts` bằng Zod.

## Cấu trúc Thư mục & Nguyên tắc Phân chia Code

Dự án áp dụng mô hình Feature-Based Hybrid:

```plaintext
src/
├── assets/                   # Static internal media, images và fonts
├── components/
│   └── ui/                   # UI components nguyên tử dùng chung (BaseButton, BaseInput...)
├── composables/              # Custom composables dùng chung toàn app (useDebounce...)
├── config/
│   └── env.ts                # Zod schema validation cho biến môi trường tại runtime
├── features/                 # Mô hình Feature-based (Mỗi module nghiệp vụ nằm trọn trong 1 thư mục)
│   └── example/
│       ├── api/              # API fetchers & Axios endpoints của feature
│       ├── components/       # Component nội bộ của riêng feature này
│       ├── composables/      # Custom composables logic riêng của feature
│       ├── schemas/          # Zod validation schemas
│       └── types/            # TypeScript types / interfaces riêng
├── layouts/
│   └── MainLayout.vue        # Layout khung mẫu chứa thanh điều hướng và <RouterView />
├── lib/
│   ├── axios.ts              # Axios instance với base config & interceptors
│   └── queryClient.ts        # TanStack Vue Query client cấu hình sẵn caching
├── router/
│   └── index.ts              # Cấu hình Vue Router (lazy loading + navigation guard)
├── stores/
│   └── useAppStore.ts        # Pinia global store theo chuẩn Setup Store
├── types/
│   └── api.ts                # TypeScript definitions và API response dùng chung
├── utils/
│   └── cn.ts                 # Helper merge Tailwind class (clsx + tailwind-merge)
├── views/                    # Các trang hiển thị chính ứng với routes (DashboardView, ExampleView...)
├── App.vue                   # Root Component bọc <RouterView />
├── main.ts                   # Entry point khởi tạo Vue app, Pinia, VueQueryPlugin và Router
└── style.css                 # File CSS chính với Tailwind v4 import (@import "tailwindcss";)
```

### Nguyên tắc Đặt Code:

- **`src/views/` & `src/layouts/`:** Chỉ định nghĩa layout khung và các view trang chính kết nối router. Giữ mỏng, không ôm đồm logic nghiệp vụ phức tạp.
- **`src/features/<feature>/`:** Mọi nghiệp vụ liên quan đến module (ví dụ: auth, products, orders) gom toàn bộ vào đây. Các lập trình viên trong team có thể làm việc song song trên từng feature mà không sợ xung đột mã nguồn.
- **`src/components/ui/`:** Chỉ chứa các UI primitives không gắn liền với logic nghiệp vụ cụ thể (BaseButton, BaseInput, Modal...).
- **`src/composables/`:** Chỉ chứa các custom composable tiện ích có khả năng tái sử dụng xuyên suốt nhiều modules.

## Danh sách NPM Scripts

| Script               | Lệnh                       | Mục đích                                                                     |
| :------------------- | :------------------------- | :--------------------------------------------------------------------------- |
| `npm run dev`        | `vite`                     | Khởi chạy local dev server trên cổng quy định trong `.env` (5000)            |
| `npm run build`      | `vue-tsc -b && vite build` | Kiểm tra type toàn diện và build production bundle vào thư mục `/dist`       |
| `npm run preview`    | `vite preview`             | Khởi chạy local preview cho production build trên cổng quy định trong `.env` |
| `npm run type-check` | `vue-tsc --noEmit`         | Kiểm tra toàn bộ types TypeScript cả file `.ts` lẫn template `.vue`          |
| `npm run lint`       | `eslint . --fix`           | Kiểm tra linting và tự động sửa lỗi với ESLint v10 Flat Config               |
| `npm run format`     | `prettier --write .`       | Format toàn bộ mã nguồn và tự động sắp xếp class Tailwind                    |

## Quy ước Git Commit (Conventional Commits)

Repository được cài đặt sẵn Husky v9 và Commitlint để tự động chuẩn hóa commit message:

```text
<type>(<scope>): <mô tả ngắn gọn>
```

- `feat`: Thêm tính năng mới (ví dụ: `feat(auth): implement jwt refresh token flow`)
- `fix`: Sửa lỗi (ví dụ: `fix(dashboard): correct layout shift on mobile view`)
- `refactor`: Tái cấu trúc mã nguồn không làm thay đổi tính năng
- `chore`: Thay đổi cấu hình, dependencies, tooling
- `docs`: Cập nhật tài liệu, README
- `style`: Định dạng code, dấu chấm phẩy, khoảng trắng

Khi chạy `git commit`, hook `pre-commit` sẽ kích hoạt `lint-staged` để tự động chạy ESLint và Prettier trên các file staged; sau đó hook `commit-msg` sẽ kiểm tra cú pháp commit message.
