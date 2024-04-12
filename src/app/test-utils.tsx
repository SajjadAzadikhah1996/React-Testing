import {ReactElement} from 'react';
import {render, RenderOptions} from '@testing-library/react';
import AppServiceProvider from "@/app/providers/AppServiceProvider";

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AppServiceProvider, ...options});

export * from '@testing-library/react';
export {customRender as render};